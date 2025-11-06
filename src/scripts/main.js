'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
    const inputName = input.name;
    input.id = inputName;

    const capitalizedName = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
    input.placeholder = capitalizedName;

    const label = document.createElement('label');
    label.className = 'field-label';
    label.htmlFor = inputName;
    label.textContent = capitalizedName;

    input.parentElement.prepend(label);
});
