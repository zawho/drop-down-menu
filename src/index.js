function displayMenu() {
    const menuOptions = document.querySelectorAll('.menu-option');
    menuOptions.forEach((menuOption) => {
        const optionVar = menuOption;
        optionVar.style.display = 'flex';
    }); 
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
            const menuArr = Array.from(bodyArr[i].childNodes);
            for (let j = 0; j < menuArr.length; j++) {
                menuArr[j].addEventListener('mouseover', displayMenu);
                menuArr[j].addEventListener('mouseout', hideMenu);
            }
        }
    }
}

setMenuEvent();