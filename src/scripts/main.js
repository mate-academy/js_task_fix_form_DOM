'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.for = input.id;
  label.class = `field-label`;

  let placeholderName = '';

  for (let i = 0; i < input.name.length; i++) {
    if (input.name[i] !== input.name[i].toLowerCase()) {
      placeholderName += ' ' + input.name[i].toLowerCase();
    } else {
      placeholderName += input.name[i];
    }
  }

  label.textContent = placeholderName.toUpperCase();

  input.placeholder = placeholderName.charAt(0).toUpperCase()
  + placeholderName.slice(1);

  input.parentElement.insertAdjacentElement('afterbegin', label);
});

document.querySelector('.login-wrap').style.height = '612px';
