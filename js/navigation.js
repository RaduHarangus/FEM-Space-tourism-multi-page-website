// const menuButton = document.getElementsByClassName('mobile-nav-toggle')[0];
// const primaryNav = document.getElementsByClassName('primary-navigation')[0];
// const ariaExpanded = menuButton.getElementsByTagName("span")[0];
//
// menuButton.addEventListener('click', function() {
//     const ariaExpandedVal = ariaExpanded.getAttribute("aria-expanded") === 'true';
//     ariaExpanded.setAttribute("aria-expanded", !ariaExpandedVal);
//     primaryNav.style.transform = ariaExpandedVal ? "translateX(100%)" : "translateX(0)";
//     menuButton.style.backgroundImage = ariaExpandedVal ? 'url("./assets/shared/icon-hamburger.svg")' : 'url("./assets/shared/icon-close.svg")';
// });

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }
    navToggle.style.backgroundImage = visibility === "true" ? 'url("./assets/shared/icon-hamburger.svg")' : 'url("./assets/shared/icon-close.svg")';

});