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
    return word.name.includes('Name')
    ? word.name.split('Name').join(' ') + 'Name'
    : word.name;
  }


  label.className = 'field-label';

  label.innerText = separName(inputBlock);

  label.htmlFor = inputBlock.id;
  inputBlock.setAttribute('placeholder', 
  firstWord(separName(inputBlock)));

  block.prepend(label);
});
