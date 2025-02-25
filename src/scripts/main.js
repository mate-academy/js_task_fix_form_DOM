'use strict';

const inputElements = [...document.querySelectorAll('input')];

function camelToRegular(text) {
  const result = text.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1);
}

for (let i = 0; i < inputElements.length; i++) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputElements[i].getAttribute('id'));
  label.textContent = camelToRegular(inputElements[i].getAttribute('name'));

  inputElements[i].setAttribute(
    'placeholder',
    camelToRegular(inputElements[i].getAttribute('name')),
  );
  inputElements[i].before(label);
}
