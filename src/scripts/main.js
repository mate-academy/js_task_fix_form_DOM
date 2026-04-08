'use strict';


const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    const label = input.parentElement.appendChild(document.createElement('label'));
    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name.toUpperCase();
    input.setAttribute('placeholder', input.name);
})
// write code here
