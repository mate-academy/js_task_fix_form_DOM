'use strict';

// write code here

const inputs = document.querySelectorAll('input');

const textPlaceholders = [
  'First Name', 'Last Name', 'Email', 'Password', 'Email', 'Password',
];
const label = document.createElement('label');
const divField = document.querySelectorAll('.field');

for (let i = 0; i < inputs.length; i++) {
  const textContentLabel = inputs[i].getAttribute('name');

  label.textContent = textContentLabel;

  label.setAttribute(
    'for', textPlaceholders[i].toLocaleLowerCase().replaceAll(' ', '')
  );
  label.setAttribute('class', 'field-label');

  divField[i].prepend(label);

  inputs[i].setAttribute('placeholder', textPlaceholders[i]);

  inputs[i].setAttribute(
    'id', textPlaceholders[i].toLocaleLowerCase().replaceAll(' ', '')
  );
}
