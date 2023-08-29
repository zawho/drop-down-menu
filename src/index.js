function displayMenu() {
    const thisArr = Array.from(this.childNodes);
    for (let i = 0; i < thisArr.length; i++) {
        if (thisArr[i].className === 'menu-option') {
            thisArr[i].style.display = 'flex';
            thisArr[i].style.justifyContent = 'center';
            thisArr[i].style.alignItems = 'center';
        }
    }
}

function hideMenu() {
    const menuOptions = document.querySelectorAll('.menu-option');
    menuOptions.forEach((menuOption) => {
        const optionVar = menuOption;
        optionVar.style.display = 'none';
    });
}

function setMenuEvent() {
    const body = document.querySelector('body');
    const bodyArr = Array.from(body.childNodes);
    for (let i = 0; i < bodyArr.length; i++) {
        if (bodyArr[i].className === 'menu-container') {
                bodyArr[i].addEventListener('mouseover', displayMenu);
                bodyArr[i].addEventListener('mouseout', hideMenu);
        }
    }
}

setMenuEvent();