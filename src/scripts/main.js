'use strict';

const blocks = document.querySelectorAll('.field');

[...blocks].forEach(block => {
  const inputBlock = block.querySelector('input');
  const label = document.createElement('label');

  const firstWord
    = inputBlock.name.slice(0, 1).toUpperCase()
    + inputBlock.name.slice(1).toLowerCase();

  label.className = 'field-label';
  label.innerText = inputBlock.name.toUpperCase();
  label.htmlFor = inputBlock.id;
  inputBlock.setAttribute('placeholder', firstWord);

  block.prepend(label);
});
