'use strict';

const blocks = document.querySelectorAll('.field');

[...blocks].forEach(block => {
  const inputBlock = block.querySelector('input');
  const label = document.createElement('label');

  function firstWord(word) {
    return word.slice(0, 1).toUpperCase()
    + word.slice(1);
  }

  function separName(word) {
    return word.includes('Name')
    ? word.split('Name').join(' ') + 'Name'
    : word;
  }

  label.className = 'field-label';

  label.innerText = separName(inputBlock.name);

  label.htmlFor = inputBlock.id;
  inputBlock.setAttribute('placeholder', 
  firstWord(separName(inputBlock.name)));

  block.prepend(label);
});
