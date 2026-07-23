// ============================================================
// FIELDS DIAGRAM (section 03 — #fieldsViz)
// Draws a drag-able, force-directed node graph with D3, showing
// "Research" at the center connected to the five fields it
// intersects with. Wrapped in an IIFE so nothing here leaks into
// the global scope.
// ============================================================
(function(){

  // Find the empty <div id="fieldsViz"> from the HTML and read its
  // rendered size, so the SVG we build fits it exactly.
  const container = document.getElementById('fieldsViz');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // --- Data: the graph's nodes ---
  // `type: 'core'` = the central research node (bigger circle, deep-blue fill).
  // `type: 'field'` = a surrounding discipline node (smaller, dark panel fill).
  // `label` is an array so multi-word names can wrap onto two lines.
  const nodes = [
    {id:'research', label:['Research'], type:'core'},
    {id:'archival', label:['Archival','Science'], type:'field'},
    {id:'infra', label:['Infrastructure','Studies'], type:'field'},
    {id:'community', label:['Participatory','Community Archives'], type:'field'},
    {id:'hci', label:['HCI &','Interactive Design'], type:'field'},
    {id:'policy', label:['Information Policy','Governance'], type:'field'}
  ];

  // --- Data: the graph's edges ---
  // `kind: 'core'` = a line from the center out to a field (solid, deep blue).
  // `kind: 'pair'` = a line between two fields that also relate to each
  // other directly (dashed, medium blue). `source`/`target` here are just
  // the `id` strings above — D3 resolves them into node objects below.
  const links = [
    {source:'research', target:'archival', kind:'core'},
    {source:'research', target:'infra', kind:'core'},
    {source:'research', target:'community', kind:'core'},
    {source:'research', target:'hci', kind:'core'},
    {source:'research', target:'policy', kind:'core'},
    {source:'archival', target:'infra', kind:'pair'},
    {source:'community', target:'hci', kind:'pair'},
    {source:'archival', target:'policy', kind:'pair'}
  ];

  // Create the <svg> element inside #fieldsViz. viewBox lets it scale
  // responsively while keeping the coordinate system fixed at width×height.
  const svg = d3.select('#fieldsViz')
    .append('svg')
    .attr('viewBox', [0, 0, width, height]);

  // Draw one <line> per link. Class names (fv-core / fv-pair) hook into
  // the corresponding color/dash styles defined in styles.css.
  const linkSel = svg.append('g')
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('class', d => 'fv-link ' + (d.kind === 'core' ? 'fv-core' : 'fv-pair'));

  // Declared here (not `const`) because the drag handlers below need to
  // reference `simulation` before it's actually created further down.
  let simulation;

  // --- Drag behavior ---
  // Lets a visitor click-and-drag any node to reposition it. While
  // dragging, the node is "pinned" (fx/fy fixed) so the simulation
  // doesn't fight the mouse; on release it's unpinned and free to
  // settle again under the forces below.
  function drag(){
    function dragstarted(event, d){
      if (!event.active) simulation.alphaTarget(0.3).restart(); // reheat the simulation
      d.fx = d.x; d.fy = d.y; // pin the node at its current position
    }
    function dragged(event, d){
      d.fx = event.x; d.fy = event.y; // follow the cursor
    }
    function dragended(event, d){
      if (!event.active) simulation.alphaTarget(0); // let the simulation cool back down
      d.fx = null; d.fy = null; // release the pin
    }
    return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
  }

  // Create one <g> group per node (a circle plus its label text will go
  // inside each group), and attach the drag behavior to all of them.
  const nodeSel = svg.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('class', d => 'fv-node fv-type-' + d.type) // fv-type-core or fv-type-field
    .call(drag());

  // The circle behind each node's label. Core node is drawn bigger (r=54)
  // than field nodes (r=46) to visually anchor it as the center.
  nodeSel.append('circle')
    .attr('r', d => d.type === 'core' ? 54 : 46);

  // Render each node's label as one <text> element per line in its
  // `label` array, vertically centered as a block inside the circle.
  nodeSel.each(function(d){
    const g = d3.select(this);
    const lineHeight = 11;
    // Shift the first line up (and last line down) so a multi-line
    // label is centered as a whole, not just its first line.
    const startY = -((d.label.length - 1) * lineHeight) / 2 + 4;
    d.label.forEach((line, i) => {
      g.append('text')
        .attr('class', 'fv-label')
        .attr('y', startY + i * lineHeight)
        .text(line);
    });
  });

  // --- Physics simulation ---
  // This is what makes the diagram self-arrange and settle into a
  // readable layout instead of needing manually-set coordinates.
  simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id)
      // core links (research→field) are shorter and stronger, so the
      // field nodes cluster fairly tightly around the center;
      // pair links (field↔field) are longer and weaker, just a nudge.
      .distance(d => d.kind === 'core' ? 120 : 175)
      .strength(d => d.kind === 'core' ? 0.7 : 0.25))
    .force('charge', d3.forceManyBody().strength(-380)) // nodes repel each other, so they spread out
    .force('center', d3.forceCenter(width / 2, height / 2)) // keeps the whole cluster centered in the box
    .force('collide', d3.forceCollide().radius(d => (d.type === 'core' ? 54 : 46) + 14)) // prevents circles overlapping
    .on('tick', ticked); // re-run `ticked` on every physics step

  // Runs on every simulation tick: reads each node's current x/y
  // (computed by the forces above) and repositions the SVG elements
  // to match.
  function ticked(){
    linkSel
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
    nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
  }

  // --- Hover highlight ---
  // On hovering a node, dim every node/link that ISN'T connected to it,
  // so the visitor can trace one node's relationships at a glance.
  nodeSel.on('mouseenter', function(event, d){
    const connected = new Set([d.id]); // the hovered node is always "connected" to itself
    links.forEach(l => {
      if (l.source.id === d.id) connected.add(l.target.id);
      if (l.target.id === d.id) connected.add(l.source.id);
    });
    nodeSel.style('opacity', n => connected.has(n.id) ? 1 : 0.25);
    linkSel.style('opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.08);
  }).on('mouseleave', function(){
    // restore full opacity once the cursor leaves the node
    nodeSel.style('opacity', 1);
    linkSel.style('opacity', 1);
  });

})();
