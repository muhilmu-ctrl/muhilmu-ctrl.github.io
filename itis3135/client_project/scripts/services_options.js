document.addEventListener("DOMContentLoaded",() => {
    const navLink = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".data-section");

    function hideSection(){
        sections.forEach((s) => {
            s.style.display = "none";
        });
    }
    function selectAriaFalse(){
        navLink.forEach((n) => {
            n.setAttribute("aria-selected","false");
        });
    }
    navLink.forEach((n) => {
        n.addEventListener("click",(e) => {
        e.preventDefault();

        const target = e.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(target);

        hideSection();
        selectAriaFalse();
        if (targetSection){
            targetSection.style.display = "block";
        }
        e.currentTarget.setAttribute("aria-selected","true");
        });
    });
    const defaultPage = document.querySelector("#housewarmings");
    if (defaultPage){
        defaultPage.style.display = "block";
    }
    const defaultNavLink = document.querySelector('a[href="#housewarmings"]');
    if (defaultNavLink){
        defaultNavLink.setAttribute("aria-selected","true");
    }
});