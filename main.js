const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

const tabList = document.querySelector('[role="tabList"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

function checkIndexTab(tab) {
    return tab.getAttribute('tabindex') === '0';
}

tabList.addEventListener('keydown', (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1

    // console.log(tabs[0].getAttribute('tabindex'));
    const currentTabIndex = tabs.findIndex(checkIndexTab);
    tabs[currentTabIndex].setAttribute('tabindex', '-1');

    // if the right key is pushed, move to the next tab on the right

    // if the left key is pushed, move to the next tab on the left
});