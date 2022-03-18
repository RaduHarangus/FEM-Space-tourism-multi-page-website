const dotList = document.querySelector('[role="dotList"]');
const dots = dotList.querySelectorAll('[role="dot"]');

dotList.addEventListener('keydown', changeDotFocus);

dots.forEach((dot) => {
    dot.addEventListener('click', changeDotPanel);
});

let dotFocus = 0;
function changeDotFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        dots[dotFocus].setAttribute("tabindex", -1);

        if (e.keyCode === keydownRight) {
            ++dotFocus;
            if (dotFocus >= dots.length) {
                dotFocus = 0;
            }
        } else if (e.keyCode === keydownLeft) {
            --dotFocus;
            if (dotFocus < 0) {
                dotFocus = dots.length - 1;
            }
        }

        dots[dotFocus].setAttribute("tabindex", 0);
        dots[dotFocus].focus();
    }
}

function changeDotPanel(e) {
    const targetDot = e.target;
    const targetPanel = targetDot.getAttribute('aria-controls');
    const dotContainer = targetDot.parentNode;
    const mainContainer = dotContainer.parentNode;
    const targetImage = targetDot.getAttribute('data-image');

    dotContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected', false);

    targetDot.setAttribute('aria-selected', true);

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


