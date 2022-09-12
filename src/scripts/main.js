'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
    const label = document.createElement('label');
    label.className = 'field-label';
    label.innerText = input.name;
    input.parentElement.append(label);
    input.placeholder = capitalize(input.name);
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
