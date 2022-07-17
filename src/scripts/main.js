'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const lable = document.createElement('label');

  lable.setAttribute('class', 'form-field');
  lable.setAttribute('for', input.getAttribute('id'));
  lable.textContent = input.getAttribute('name');

  const placeholderValue = input.getAttribute('name')[0].toUpperCase()
    + input.getAttribute('name').slice(1);

  input.setAttribute('placeholder', placeholderValue);
  input.before(lable);
}
