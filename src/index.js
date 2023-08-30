function displayMenu() {
    const thisMenuArr = Array.from(this.childNodes);
    for (let i = 0; i < thisMenuArr.length; i++) {
        if (thisMenuArr[i].className === 'dropdown-option') {
            thisMenuArr[i].style.display = 'flex';
        }
    }
}

function hideMenu() {
    const thisMenuArr = Array.from(this.childNodes);
    for (let i = 0; i < thisMenuArr.length; i++) {
        if (thisMenuArr[i].className === 'dropdown-option') {
            thisMenuArr[i].style.display = 'none';
        }
    }
}

function setMenuEvent() {
    const body = document.querySelector('body');
    const bodyArr = Array.from(body.childNodes);
    for (let i = 0; i < bodyArr.length; i++) {
        if (bodyArr[i].className === 'dropdown-menu') {
            bodyArr[i].addEventListener('mouseover', displayMenu);
            bodyArr[i].addEventListener('mouseout', hideMenu);
        }
    }
}

function createMenu() {
    const body = document.querySelector('body');
    const dropDownMenu = document.createElement('div');
    dropDownMenu.className = 'dropdown-menu';
    dropDownMenu.innerText = 'menu';
    body.appendChild(dropDownMenu);
    const dropDownOptions = [];
    for (let i = 1; i < 6; i++) {
        dropDownOptions[i] = document.createElement('div');
        dropDownOptions[i].className = 'dropdown-option';
        dropDownOptions[i].innerText = `option ${i}`;
        dropDownMenu.appendChild(dropDownOptions[i]);
        dropDownOptions[i].style.display = 'none';
    }
    setMenuEvent();
}

function styleMenu() {
    const dropDownMenus = document.querySelectorAll('.dropdown-menu');
    const dropDownOptions = document.querySelectorAll('.dropdown-option');
    for (let i = 0; i < dropDownMenus.length; i++) {
        dropDownMenus[i].style.textAlign = 'center';
        dropDownMenus[i].style.display = 'flex';
        dropDownMenus[i].style.flexDirection = 'column';
        dropDownMenus[i].style.border = '1px solid black';
        dropDownMenus[i].style.maxWidth = '200px';
        dropDownMenus[i].style.gap = '5px';
        dropDownMenus[i].style.padding = "5px 0px";
    }
    for (let i = 0; i < dropDownOptions.length; i++) {
        dropDownOptions[i].style.display = 'none';
        dropDownOptions[i].style.borderTop = '1px solid black';
        dropDownOptions[i].style.paddingTop = '5px';
        dropDownOptions[i].style.justifyContent = 'center';
        dropDownOptions[i].style.alignItems = 'center';
    }
}
createMenu();
styleMenu();

export { createMenu, styleMenu };