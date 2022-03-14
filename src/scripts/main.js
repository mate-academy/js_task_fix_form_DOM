'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputlabel = document.createElement('Label');

  inputlabel.htmlFor = input.id;
  inputlabel.textContent = input.name;
  inputlabel.className = 'field-label';
  input.placeholder = input.name.toUpperCase();

  input.before(inputlabel);
});
