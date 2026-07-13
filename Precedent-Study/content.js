/* ============================================================
   CONTENT — edit this file only.
   Nothing in here affects layout, animation, or behavior.
   script.js reads these arrays and does the rest automatically:
   shuffling order, random placement, sizing, dragging, etc.
   ============================================================ */


/* ---------------------------------------------------------------
   1) TEXT WINDOWS
   A plain browser window showing a short piece of text.
   Each item becomes exactly one window, guaranteed to appear
   every time the page (re)loads.

   Fields:
     fname  - short label shown in the window's title bar
     text   - the body text. Use "\n" for a line break.
--------------------------------------------------------------- */
const textFragments = [
  // { fname:'note.txt', text: `connection lost 14 seconds ago` }
];


/* ---------------------------------------------------------------
   1b) IMAGE WINDOWS
   A browser window showing a single image instead of text.
   Each item becomes exactly one window, guaranteed to appear
   every time the page (re)loads, same as textFragments.

   NOTE: script.js currently only knows how to build .win.text
   windows from textFragments. It will need a small update to
   also read this array and build an <img>-based window body
   (e.g. a .win.image variant). Send over script.js and I can
   wire that up.

   Fields:
     fname - short label shown in the window's title bar
     src   - path or URL to the image file
     alt   - alt text (kept from the original mood-text, useful
             for accessibility and as a fallback caption)
--------------------------------------------------------------- */
const imageFragments = [
  { fname:'island_view.jpg', src:'images/01_Uncensored_Library_Island.jpg', alt:`island view` },
  { fname:'fist.jpg', src:'images/02_Uncensored_Library_Fist.jpg', alt:`fist` },
  { fname:'front_view.jpg', src:'images/03_Uncensored_Library_front2.png', alt:`front view` },
  { fname:'hallway_view.jpg', src:'images/04_Uncensored_Library_Hallway.jpg', alt:`hallway view` },
  { fname:'hallway_view_2.jpg', src:'images/05_Uncensored_Library_Hallway 2.png', alt:`hallway view2` },
  { fname:'dome view.jpg', src:'images/06_Uncensored_Library_Dome.png', alt:`dome view` },
  { fname:'US Room.jpg', src:'images/07_Uncensored_Library_US Room.png', alt:`US Room` },
  { fname:'US Room_2.jpg', src:'images/08_Uncensored_Library_US Room.png', alt:`US Room2` },
  { fname:'US Room_3.jpg', src:'images/09_Uncensored_Library_US Room.png', alt:`US Room3` },
  { fname:'floor_plan.jpg', src:'images/Floor-Plan.png', alt:`Floor Plan` },
  { fname:'RSF_logo.jpg', src:'images/RSF_Logo.png', alt:`RSF logo` },
  { fname:'journalists.jpg', src:'images/journalists.png', alt:`journalists` },
  { fname:'poster.jpg', src:'images/Poster_Uncensored_Library_01.png', alt:`poster` }
];


/* ---------------------------------------------------------------
   2) LINK WINDOWS
   A browser window whose body is a single clickable link that
   opens in a new tab.

   Fields:
     word - the clickable label shown in the window
     url  - where it goes (must start with https://)
--------------------------------------------------------------- */
const bibliography = [
  { word:'Cavalcanti, Marcycleis Maria; Siebra, Sandra Albuquerque; Bufrem, Leilah Santiago; Pajeú, Hélio Márcio (13 November 2022). "Uncensored Library Project: a strategy to circumvent censorship in countries predatory of press freedom". Revista Digital de Biblioteconomia e Ciência da Informação. 20 (2022): 1–22. doi:10.20396/rdbci.v20i00.8669187/30478.', url:'https://www.researchgate.net/publication/367498970_Uncensored_Library_Project_astrategy_to_circumvent_censorship_in_countries_predatory_of_press_freedom' },
  { word:'Oh, Hyung Seung (2025). "Libraries in Games as Spaces of Resistance to Censorship: Focus On Minecraft’s ‘The Uncensored Library.’". The Journal of Next-Generation Humanities and Social Sciences.', url:'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003246888' },
  { word:'Woodyatt, Amy (13 March 2020). "Minecraft hosts uncensored library full of banned texts". Tech. CNN. Archived from the original on 13 March 2020. Retrieved 15 March 2020.', url:'https://www.cnn.com/2020/03/13/tech/minecraft-uncensored-library-scli-intl/index.html' },
  { word:`Bahr, Will (11 March 2026). "Minecraft's Uncensored Library Adds a United States Wing". The New York Times. ISSN 0362-4331.`, url:'https://www.nytimes.com/2026/03/11/arts/minecraft-uncensored-library-united-states.html' },
  { word:'Davenport, James (13 March 2020). "New Minecraft library is clever loophole and safe haven for censored journalism". PC Gamer. Archived from the original on 14 August 2021.', url:'https://www.pcgamer.com/new-minecraft-library-is-clever-loophole-and-safe-haven-for-censored-journalism/' },
  { word:`Peet, Lisa (7 April 2022). "Reporters Without Borders' Uncensored Library Uses Minecraft To Provide Access to Censored Work". Library Journal. Archived from the original on 6 October 2022.`, url:'https://www.libraryjournal.com/story/reporters-without-borders-uncensored-library-uses-minecraft-to-provide-access-to-censored-work' },
  { word:`Gerken, Tom (13 March 2020). "Minecraft 'loophole' library of banned journalism". BBC. Archived from the original on 14 August 2021.`, url:'https://www.bbc.co.uk/news/world-us-canada-51883247' },
  { word:'"The Uncensored Library". The Uncensored Library. Reporters Without Borders. Archived from the original on 8 March 2021.', url:'https://uncensoredlibrary.com/en/' }
];

const download = [
  { word:'download_map',  url:'https://drive.google.com/drive/folders/13M3lcAkdmW7JmZRb_ULK46w_4SZiNU6B' },
  { word:'press_kit',     url:'https://drive.google.com/drive/folders/1_8-pPo75Ib1n2NDUfNtAkKbvEB2lG72y' },
  { word:'donate',        url:'https://donate.rsf.org/membership/~my-donation' },
  { word:'petition',      url:'https://rsf.org/en/our-petitions' },
  { word:'membership',    url:'https://rsf.org/en/membership' }
];

/* ---------------------------------------------------------------
   3) HEADER MENU CONTENT
   Text shown when the person clicks a word in the top menu bar
   These items are also folded into the guaranteed content list, 
   so they can appear in the random cascade too, not just on click.
--------------------------------------------------------------- */
const menuContent = {
  history: { fname:'history.info', text: [
  `Reporters Without Borders (RSF) is an international non-profit organization founded in 1985 in Montpellier, France, by four journalists — Robert Ménard, Rémy Loury, Jacques Molénat, and Émilien Jubineau. Today it is the world's largest NGO dedicated specifically to promoting and defending press freedom, advocating for journalists' rights, and supporting those who face threats, harassment, or persecution because of their work. RSF monitors press freedom violations, conducts field investigations, and raises public awareness of the dangers journalists face around the world, with the underlying goal of building a safer, more transparent environment for the free flow of information. The organization is headquartered in Paris, with bureaus in ten cities worldwide and a network of correspondents spanning roughly 130 countries, and it holds consultative status with the United Nations, UNESCO, the Council of Europe, and the International Organization of the Francophonie. Its record of direct action includes organizing protests around the 2008 Beijing Olympics, launching the only independent radio station broadcasting into Eritrea in 2009, setting up a media support center in Haiti after the January 2010 earthquake, and training journalists and bloggers in Syria.`,
  `\n\nRSF's mission rests on a specific legal and ethical foundation: it grounds its advocacy in Article 19 of the Universal Declaration of Human Rights, which recognizes the right to seek, receive, and share information regardless of borders, and it promotes the Munich Charter, a 1971 document setting out journalists' professional rights and obligations that has since been adopted by most journalists' unions in Europe. Since 1992, RSF has also recognized journalists who continue reporting despite threats and censorship through what is now called the RSF Press Freedom Prize; past honorees include Liu Xiaobo, who later won the Nobel Peace Prize, and Narges Mohammadi, who won the RSF award in 2022 before receiving the Nobel Peace Prize the following year.`,
  `\n\nPerhaps its best-known tool is the annual World Press Freedom Index, which ranks the state of press freedom in 180 countries and territories and is compiled from surveys of RSF's correspondents, partner organizations, journalists, and human rights researchers. RSF has also adapted its methods to digital-era censorship: its Operation Collateral Freedom, launched in 2014, creates mirror sites to restore access to blocked news outlets in countries including China, Iran, Saudi Arabia, and Vietnam, and it publishes an annual "Predators of Press Freedom" gallery naming the individuals and institutions most responsible for attacks on journalism. The organization has received international recognition of its own, including the European Parliament's Sakharov Prize for Freedom of Thought in 2005, and in 2025 it marked its fortieth anniversary under current secretary-general Thibaut Bruttin, who succeeded Christophe Deloire following Deloire's death in June 2024.`, 
  ].join('') },

  project:   { fname:'project.info',   text:
    `The Uncensored Library is a virtual library built within Minecraft that preserves and provides access to journalism censored in different parts of the world. Launched in 2020 on the World Day Against Cyber Censorship, the project transforms a popular gaming platform into a freely accessible archive where visitors can read banned articles through in-game books. The library is organized into country-specific halls, each presenting reports that have been suppressed or restricted by governments while highlighting issues surrounding press freedom. By combining digital architecture, interactive exploration, and journalism, the project demonstrates how virtual environments can serve as spaces for preserving information, promoting public awareness, and resisting censorship.` 
  },

  members:   { fname:'members.info',   text: [
    `The project brought together organizations with expertise in journalism, architecture, creative design, and digital development. Each participant contributed a distinct role to transform the concept into an interactive virtual experience. `,
    `\n\nReporters Without Borders (RSF) – Initiated the project, curated the censored journalistic content, and ensured the library reflected its mission of defending press freedom.`,
    `\nBlockWorks – Designed and constructed the virtual library in Minecraft, creating its monumental architecture and immersive exhibition spaces.`,
    `\nDDB Berlin – Developed the project's creative concept, branding, and communication strategy to raise international awareness.`,
    `\nMediaMonks – Provided technical development and digital production support, helping implement and deliver the interactive experience.`,
    `\nJournalists and Contributors – Supplied the censored articles and reporting featured throughout the library, enabling visitors to access information that had been restricted in their home countries.`
  ].join('') },

  timeline:   { fname:'timeline.info',   text: [
    `2018 | The Uncensored Playlist:`,
    `\nBefore the Library existed, RSF Germany and creative agency DDB ran a different censorship-circumvention campaign: the Uncensored Playlist, released on March 12, 2018, in which musicians and journalists teamed up to exploit a loophole in modern-day censorship. Five journalists from five heavily censored countries — China, Vietnam, Uzbekistan, Thailand, and Egypt — partnered with RSF Germany to break through the free-speech blockade using music instead of traditional media. The logic was that strict laws govern the flow of information in mainstream news, but those same laws don't apply to music streaming sites like Spotify, Apple Music, and Deezer, so RSF turned censored articles into song lyrics and released them as an 18-track playlist. This project matters for the timeline because, according to the creative lead who worked on both campaigns, the Library was built two years after the Playlist as the team's next project for RSF — establishing the "loophole" logic (find an accessible platform authoritarian governments haven't thought to block) that the Library would later reuse with Minecraft instead of Spotify.`,
    `\n\nLate 2019 to early 2020 | Building the Library:`,
    `\nOnce the Minecraft concept was chosen, the actual construction was a substantial undertaking. The library was built over three months and is made from over 12.5 million blocks. It took 24 builders from 16 different countries, working roughly 250 hours combined, to design and create the structure. The build was led by Minecraft-specialist studio BlockWorks, working alongside DDB Berlin and MediaMonks. The main dome alone is nearly 300 metres wide, which would make it the second-largest dome in the world if built in real life. The design style was a deliberate choice: BlockWorks chose a neoclassical style associated with government and public buildings — official and powerful — specifically to invert that association, using it to represent the freedom of the press rather than the authority of a regime.`,
    `\n\nMarch 12, 2020 | Launch of The Uncensored Library:`,
    `\nThe Library opened to the public on March 12, 2020, timed to the World Day Against Cyber Censorship. At launch, it covered five countries — Egypt, Mexico, Russia, Saudi Arabia, and Vietnam — and contained over 200 different books, containing censored articles republished in both English and the original language. The choice of countries wasn't arbitrary: countries were picked by cross-referencing RSF's World Press Freedom Index against Google data on Minecraft's popularity by country, targeting places with both poor press freedom scores and high Minecraft interest.`,
    `\n\n2020, during the pandemic | Covid-19 Room:`,
    `\nIn response to Covid-19 pandemic, RSF added a dedicated room addressing how the pandemic was affecting journalism. This room contains books on 10 countries — Brazil, China, Egypt, Hungary, Iran, Myanmar, North Korea, Russia, Thailand, and Turkmenistan — showing how coverage of the virus had been restricted or manipulated in each.`,
    `\n\nMarch 2021 | Expansion to Belarus and Brazil:`,
    `\nIn March 2021, RSF added two new country wings to the Library: Belarus and Brazil. The Belarus wing was added in response to the 2020-2021 Belarusian protests, which were met with a violent crackdown on journalists. The Belarus room publishes articles from the independent website Charter 97, blocked in Belarus since January 2018. The Brazil wing was added in response to the Bolsonaro government's attacks on press freedom, including the arrest of journalists and the spread of disinformation since President Bolsonaro's 2018 election.`,
    `\n\nSeptember 2021 | Webby Award:`,
    `\nSocial Change." The Webby Awards are an annual awards ceremony that honors excellence on the Internet, including websites, advertising, video, and social media. The Uncensored Library was recognized for its innovative approach to preserving press freedom and providing access to censored information through a virtual platform. By this point the project's reach had grown substantially: works in the Library had reached more than 25 million gamers across 165 countries, and the campaign had generated more than 850 news articles with a combined media reach of 2.7 billion with all on a media budget of €0, while driving a 62% increase in donations to RSF.`,
    `\n\nLate 2021 | Eritrea wing:`,
    `\nIn late 2021, RSF added a wing for Eritrea, highlighting the country's strict media controls and the challenges faced by journalists. The room, created in collaboration with the Dawit Isaak Library in Malmö, Sweden, marked exactly twenty years since Swedish-Eritrean journalist Dawit Isaak was arrested by Eritrean security officers on September 23, 2001. It features Isaak's own writings, including texts from the book "Hope: The Tale of Moses and Manna's Love." Eritrea was ranked last — 180th out of 180 countries — in RSF's 2021 World Press Freedom Index at the time.`,
    `\n\nMarch 2023 | Expansion of Iran room:`,
    `\nIn March 2023, RSF expanded its Iran Russia content to include more comprehensive coverage of the country's media landscape and the challenges faced by journalists. The new room on Iran contains information from the US-based Iranian TV channel Iran International, and the Russia room was also expanded. Twenty Minecraft builders from seven different countries worked on the new rooms.`,
    `\n\nMay 2023 | Peabody Award:`,
    `\nThe Library was formally honored with a Peabody Award, one of the most prestigious prizes in media and storytelling. RSF, DDB, and Media.Monks received the Peabody Award on May 9, 2023, in the Immersive and Interactive category — though the award recognized the project's 2022 body of work, per Peabody's annual cycle. Peabody's citation described the Library as "a monument to press freedom and an innovative back door for access to censored content," noting that over 20 million gamers in 165 countries had used it to access articles from journalists threatened by regimes in Saudi Arabia, Russia, Mexico, Egypt, and Vietnam.`,
    `\n\n2023 | Official Minecraft.net feature:`,
    `\nThat same year, Minecraft's own publisher gave the project an official write-up on its site — a notable endorsement, since the Library itself is an unofficial, community/NGO-built server rather than a Mojang product. Minecraft.net's article describes it as "a grand digital library meant to combat censorship," noting the project leverages Minecraft's continued accessibility in countries where social media and other platforms are blocked or controlled.`,
    `\n\nMarch 2026 | US wing:`,
    `\nThe most recent addition marks a notable shift in the project's scope: for the first time, the Library turned its attention to an established democracy rather than an authoritarian regime. RSF opened the new room to mark World Day Against Cyber Censorship on March 12, highlighting growing obstacles to press freedom in the United States. It focuses on subtler, less direct methods of pressuring the press — since taking office in January 2025, journalists have been arrested, had their homes raided, seen access to public information restricted, and watched government webpages and data deleted. A team of 24 experts from BlockWorks spent three months building the new content, and since its 2020 opening the Library overall has been visited more than one million times, with its books read 10 million times.`
  ].join('') },

  journalism: { fname:'journalism.info', text: [
    `At the heart of the Uncensored Library are not abstract statistics about press freedom, but the individual journalists whose work the project was built to preserve. Each of the library's country wings centers on real reporters — some living in exile, some imprisoned, and some no longer alive — whose writing had been erased from their home countries' media landscape. Five of these wings, representing Saudi Arabia, Egypt, Mexico, Vietnam, and Russia, illustrate just how differently censorship can operate from one country to the next, and how each journalist responded to it.`,
    `\n\nIn the Saudi Arabia wing, the central figure is Jamal Khashoggi, a columnist for The Washington Post who had once written for Saudi outlets before falling out of favor with the government. Khashoggi fled the country in 2017 and lived in self-imposed exile, continuing to criticize the policies of Crown Prince Mohammed bin Salman from abroad. On October 2, 2018, he was killed and dismembered inside the Saudi consulate in Istanbul. His fiancée, Hatice Cengiz, has since become a public supporter of the Uncensored Library project itself. Saudi Arabia permits no independent media, and the room reflects a country RSF ranked near the very bottom of its press freedom index, where even a "like" on social media can lead to imprisonment.`,
    `\n\nThe Mexico wing tells a story of physical danger rather than digital blocking. Its featured journalist, Javier Valdez, founded the newspaper Riodoce, which covered organized crime and corruption in Sinaloa, one of Mexico's most violent states, and wrote several books on drug trafficking. Valdez was shot and killed by gunmen on May 23, 2017, at age 50 — one of dozens of journalists killed in Mexico for reporting on cartel violence and official collusion. This wing also includes a memorial to the many other Mexican reporters who have died doing similar work, making it the most explicitly funereal space in the entire library.`,
    `\n\nIn the Vietnam wing, the featured figure is Nguyen Van Dai, a human rights lawyer, blogger, and democracy activist who founded the Committee for Human Rights in Vietnam in 2006 to pursue civil rights reform through legal channels. Since Vietnam's state media follows the Communist Party's directives, bloggers and citizen journalists like Dai represent nearly the only independent reporting in the country. He was sentenced in April 2018 to 15 years in prison plus five years of house arrest, though he was later released and now lives in exile in Germany; his blog remains blocked in Vietnam.`,
    `\n\nThe Russia wing features Yulia Berezovskaia, editor-in-chief of Grani.ru, a news site covering protest activity, politically motivated trials, and civil society activism. The Russian government blocked Grani.ru on March 13, 2014, as part of a broader tightening of control over critical journalists that followed the 2011–2012 protest movements. Berezovskaia has been an outspoken advocate for the library's core idea, summarizing its purpose in a line the project has used as something of a motto: that the only real way to fight censorship is to share and spread what has been censored.`,
    `\n\nThe Egypt wing's tipped scale greets visitors, symbolizing how state control tips the balance against independent reporting. Egyptian authorities have blocked hundreds of websites including the independent outlet Mada Masr since 2017, while relying on arrests and restrictive legislation to keep critical journalism in check. The scale captures an environment where accountability consistently loses out to government control.`,
    `\n\nAt the center of Belarus wing stands a television built from observer blocks, encircled by a ring of fire, which is the state's grip on broadcasting paired with the constant pressure bearing down on independent media. Since the crackdown following the disputed 2020 election, Belarusian authorities have jailed journalists, shuttered newsrooms, and criminalized the sharing of independent reporting, leaving the press increasingly isolated.`,
    `\n\nA massive gavel of the Brazil wing hovers over an open book, representing the rise of lawsuits as a tool to silence journalists. Rather than direct censorship, powerful figures and institutions increasingly turn to legal pressure burying reporters and outlets in costly litigation that discourages investigative work. The gavel is a reminder that courts can suppress public-interest journalism without ever banning the press outright.`,
    `\n\nBuilt to resemble a prison, with polished blackstone walls and heavy chains, Iran wing reflects one of the harshest press environments on earth. Eritrea has no independent media, and journalists have been held without trial for years, even some for decades. The design underscores why Eritrea consistently ranks last on RSF's World Press Freedom Index.`,
    `\n\nThe Statue of Liberty stands weeping into a pool that rises to her waist, surrounded by books containing text scrubbed from U.S. government websites. Rather than depicting outright state censorship, this wing highlights subtler pressures of lawsuits against media outlets, restricted access to public data, and growing hostility toward the press illustrating how even an established democracy can see press freedom erode.`
  ].join('') },

  system: { fname:'system.info', text: [
    `12.5 million Minecraft blocks,`,
    `\n24 builders from 16 different countries,`,
    `\n250 hours of combined work,`,
    `\nand 5 months to plan and build`,
    `\n\nThe Uncensored Library operates in two ways.`,
    `\nFirstly, players can use Minecraft: Java Edition, a multiplayer server that can be accessed by adding the sever address: visit.uncensoredlibrary.com to players’ server list. Secondly, players can download the world map directly from the Uncensored Library website and install it in their saved folder, inside the Minecraft folder.`,
    `\n\nThis project uses the game's existing mechanics to distribute and preserve censored journalism. Minecraft was selected because it remained accessible in many countries where independent news websites were blocked, providing an alternative channel for accessing information. Rather than functioning as a conventional website, the library exists as an interactive digital archive where visitors navigate the virtual environment while reading complete articles stored in Minecraft's in-game book-and-quill system.`,
    `\n\nThe project uses Minecraft's block-based world and interactive books to transform the game into an information infrastructure. Visitors can explore the digital library, access collections of censored reporting, and read articles directly within the game. The library therefore functions simultaneously as an archive, exhibition space, and educational resource, demonstrating how an existing commercial game platform can be repurposed to preserve and circulate knowledge beyond conventional web-based media.`,
    `\n\nThe journalism embedded within Minecraft's book-and-quill item is read-only, preventing other players from editing or destroying the content. In addition to the online multiplayer server, the library is available as a downloadable single-player world, allowing users to access its collections offline. This distributed format increases the resilience of the archive, since downloaded copies remain accessible even if the public server becomes unavailable.`,
  ].join('') },

  design:   { fname:'design.info',   text: [
    `The Uncensored Library was designed and built by a team of 24 Minecraft builders from 16 different countries, led by BlockWorks, a studio specializing in Minecraft architecture.`,
    `\nThe architectural aesthetic was designed by the James Delaney, the lead of the BlockWorks. Referencing real-world institutions such as the New York Public Library, the British Museum, and the Thomas Jefferson Building that houses the Library of Congress, the design team purposefully selected the design of neoclassical architecture that was traditionally used to project authority and permanence. By inverting that association, The Uncensored Library uses the same formal, monumental style to house free information instead of state power.`,
    `\nThe heart of the library features a massive central dome showcasing a world map color-coded by each country's Press Freedom Index ranking, alongside a lectern holding the World Press Freedom Index itself. Hanging overhead are the flags of all 180 countries evaluated by the index.`,
    `\nThe library contains dedicated halls for countries with severe press censorship, each incorporating its own symbolic architecture.`
  ].join('') },

  reflection: { fname:'reflection.info', text: [
    `Although The Uncensored Library is presented as a universally accessible archive that circumvents governmental censorship, its accessibility is ultimately conditional on the infrastructure of a commercial platform.`,
    `\n\nUnlike a public library, entry requires a licensed copy of Minecraft, compatible hardware, a stable internet connection, and, since March 10, 2022, authentication through a Microsoft account. Microsoft acquired Mojang Studios, Minecraft's developer, in 2014 for 2.5 billion dollars, and in October 2020 announced that Java Edition's existing Mojang accounts would be phased out in favor of Microsoft accounts. Mojang framed this change as adding security and, in its own words, "added online privacy and safety." These requirements introduce economic and technical thresholds that sit uneasily against the project's rhetoric of open access. More significantly, the Microsoft login changes what kind of access this is.`,
    `\n\nReading these articles becomes non anonymous: the platform's privacy policy discloses collection of account identifiers, device data, gameplay activity, and communications, meaning a reader enters as a logged, identifiable account rather than an unregistered visitor. Whether this login genuinely improves user privacy, as Mojang claimed when announcing the migration, is difficult for an outside observer to verify, and the claim sits awkwardly next to how the same publisher handles content elsewhere. `,
    `\n\nSince 2017, Mojang has co published a separate China Edition of Minecraft with the Chinese company NetEase, in which in game text, including the book and quill item the Uncensored Library uses to store its archive, along with chat, signs, and player and server names, is subject to government mandated censorship. This does not mean Mojang or Microsoft directly censors the Uncensored Library server itself, but it shows that the same publisher and the same in game mechanism operate under content control elsewhere, when the market or the state requires it.`,
    `\n\nThe collected account data is also legible to legal process. Microsoft states it will disclose customer data in response to a valid warrant, court order, or subpoena, and as a U.S. based provider it can be compelled to do so under U.S. law regardless of where the data physically resides. The project's workaround for state censorship therefore does not remove the reader from state reach so much as relocate it. Instead of being subject to a home government's content controls, the reader becomes subject to a different jurisdiction's legal process over their platform data, mediated by a company that enforces content restrictions on its own platform under a different government's demands. The resulting access is paradoxical, open in principle, but only to those who can afford, technically maintain, and authenticate into a corporate infrastructure that trades one set of state relationships for another.`,
    `\n\nAs a system, the project is genuinely resourceful. It repurposes a game's block architecture, book items, and world files into an archive that can be copied, relocated, and kept alive independent of any single server. But the very same design choices that make it resilient against one form of control quietly introduce another. To exist at all, the archive has to borrow someone else's infrastructure, and that infrastructure comes with its own rules, its own account systems, and its own legal jurisdiction.`,
    `\n\nThe library was never going to escape mediation entirely; the more interesting question is what it means that this particular escape route runs through a multinational software company rather than a government. Perhaps every workaround for censorship will eventually face some version of this trade, since information has to travel through some channel, and every channel belongs to someone. What The Uncensored Library makes visible, more than most projects of its kind, is how thin the line can be between building an alternative to state control and simply changing which authority gets to watch.`
  ].join('') },

  poster: { fname:'project_poster.jpg', src:'images/poster_dongeunlim.jpg', alt:`project poster` },

  diagram: { fname:'actor_netowrk_diagram.jpg', src:'images/actor-network-diagram.png', alt:`actor network diagram` }

};


/* ---------------------------------------------------------------
   4) SYSTEM ERROR MESSAGES
   One is chosen at random each time a system error box appears.
   Plain strings only.
--------------------------------------------------------------- */
const errorMessages = [
  `Error 0x00: this page .`,
  `Warning: your PC ran into problem and needs to restart.`,
  `This website is either not designed to run on your system or it contains an error.`,
  `Error 404: Page not found.`,
  `Error 2: The system cannot find the webpage specified.`,
  `System could not start the webpage service on local computer.`,
  `The Uncensored Library server could not be contacted.`,
  `A required file is missing: server.dat`,
  `Your session has expired.`
];


/* ---------------------------------------------------------------
   5) RESTART MESSAGE
   Shown, styled like a system message, once every browser window
   has been closed. lines is an array of strings; each becomes its
   own line. Wrap a piece of text in {{blink}} ... {{/blink}} to
   make just that part blink (used on the second line by default).
--------------------------------------------------------------- */
const restartMessage = {
  fname: 'System Message',
  lines: [
    `You have gone through all the contents in this archive.`,
    `{{blink}}press ok if you want to read them again{{/blink}}`
  ]
};
