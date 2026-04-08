'use strict';
let inputs = document.querySelectorAll('input');

for (let input of inputs) {
    let lable = document.createElement('label');
    lable.className = 'field-label';
    lable.textContent = input.name; 
    lable.setAttribute('for', input.id);
    input.parentElement.append(lable);

    input.setAttribute('placeholder', input.name.toLocaleUpperCase())
}
