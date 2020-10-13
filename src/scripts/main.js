'use strict';

const inputElements = document.querySelectorAll('input');
const divElements = document.querySelectorAll('.field');

for (let i = 0; i < inputElements.length; i++) {
  const label = document.createElement('label');
  const innerText = inputElements[i].getAttribute('name').toUpperCase();
  let placeholder = inputElements[i].name;

  placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  label.setAttribute('for', inputElements[i].id);
  label.setAttribute('class', 'field-label');
  label.innerText = innerText;

  divElements[i].children[0].setAttribute('placeholder', placeholder);
  divElements[i].prepend(label);
}
