'use strict';

const input = [...document.querySelectorAll('.field-text')];

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${input[i].id}`);
  label.textContent = input[i].name;
  input[i].setAttribute('placeholder', `${input[i].name.toUpperCase()}`);
  input[i].before(label);
}
