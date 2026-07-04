console.log("JS LOADED");

// Get all menu buttons
const menus = document.querySelectorAll(".menu");

// Get all sections
const pages = document.querySelectorAll(".page");

// Show a page
function showPage(pageID){

    // Hide all pages
    pages.forEach(page=>{
        page.classList.remove("active");
    });

    // Remove highlighted menu
    menus.forEach(menu=>{
        menu.classList.remove("active");
    });

    // Show selected page
    const targetPage = document.getElementById(pageID);

    if(targetPage){
        targetPage.classList.add("active");
    }

    // Highlight menu
    const activeMenu = document.querySelector(`[data-page="${pageID}"]`);

    if(activeMenu){
        activeMenu.classList.add("active");
    }

}

// Click events
menus.forEach(menu=>{

    menu.addEventListener("click", ()=>{

        showPage(menu.dataset.page);

    });

});

// Default page
showPage("intro");


// Get the archive page button
const moveButton = document.getElementById("demoButton");

if(moveButton){
    moveButton.addEventListener("click", () => {
        window.location.href = "archive.html";
    });
}

// Get the analysis page button
const nextButton = document.getElementById("nextButton");

if(nextButton){
    nextButton.addEventListener("click", () => {
        window.location.href = "analysis.html";
    });
}