'use strict';

// write code here

const inputsArr = Array.from(document.querySelectorAll('input'));

inputsArr.forEach((inputEl) => {
    inputEl.setAttribute('placeholder', `${inputEl.name.charAt(0).toUpperCase() + inputEl.name.slice(1)}`)
let newLabel = document.createElement('label');
newLabel.classList.add('field-label');
newLabel.setAttribute('for', `${inputEl.id}`);
newLabel.textContent = inputEl.name.charAt(0).toUpperCase() + inputEl.name.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2') + ' ';
inputEl.before(newLabel);
})