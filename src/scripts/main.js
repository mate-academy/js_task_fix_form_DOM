'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputlabel = document.createElement('Label');
  const inputName = input.name
    .replace(/([a-z])([A-Z])/, '$1 $2').replace(/\b\w/g, c => c.toUpperCase());

  inputlabel.htmlFor = input.id;
  inputlabel.textContent = inputName;
  inputlabel.className = 'field-label';
  input.placeholder = inputName;

  input.before(inputlabel);
});
