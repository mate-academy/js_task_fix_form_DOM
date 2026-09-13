'use strict';

// write code here
const forms = [...document.querySelectorAll('form')];

forms.forEach((form) => {
  const inputs = [...form.querySelectorAll('input')];

  inputs.forEach((input) => {
    const inputName = replacer(input.getAttribute('name'));
    const label = document.createElement('label');
    const id = input.getAttribute('id');

    input.setAttribute('placeholder', inputName);
    input.parentNode.insertBefore(label, input);
    label.setAttribute('for', id);
    label.classList.add(`field-label`);
    label.textContent = inputName;
  });
});

function replacer(str) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (firstChar) => firstChar.toUpperCase());
}
