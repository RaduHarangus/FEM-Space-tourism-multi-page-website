const tabList = document.querySelector('[role="tabList"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    const keydownUp = 38;
    const keydownDown = 40;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight || e.keyCode === keydownUp || e.keyCode === keydownDown) {
        tabs[tabFocus].setAttribute("tabindex", -1);

        if (e.keyCode === keydownRight || e.keyCode === keydownDown) {
            ++tabFocus;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        } else if (e.keyCode === keydownLeft || e.keyCode === keydownUp) {
            --tabFocus;
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute('aria-controls');
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    const targetImage = targetTab.getAttribute('data-image');

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected', false);

    targetTab.setAttribute('aria-selected', true);

    hideContent(mainContainer, '[role="panel"]');
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, `#${targetPanel}`);
    showContent(mainContainer, `#${targetImage}`);
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => {
            item.setAttribute('hidden', true);
        });
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
    parent.querySelector(content).removeAttribute('hidden');
}


