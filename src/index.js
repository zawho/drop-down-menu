function displayMenu() {
    const thisMenuArr = Array.from(this.childNodes);
    for (let i = 0; i < thisMenuArr.length; i++) {
        if (thisMenuArr[i].className === 'menu-option') {
            thisMenuArr[i].style.display = 'flex';
            thisMenuArr[i].style.justifyContent = 'center';
            thisMenuArr[i].style.alignItems = 'center';
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