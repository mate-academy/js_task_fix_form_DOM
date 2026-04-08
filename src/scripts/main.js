'use strict';

const formChilds = [...document.querySelectorAll('input')];

for (const input of formChilds) {
  const label = document.createElement('label');

  input.setAttribute('placeholder', formatedStringName(input.name));
  input.before(label);
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatedStringName(input.name);
}

function formatedStringName(inpitSting) {
  const titleWord = inpitSting[0].toUpperCase() + inpitSting.slice(1);
  const index = titleWord.toLowerCase().indexOf('name');

  if (index === -1) {
    return titleWord;
  }

  const stringWithSpace =
    titleWord.slice(0, index) + ' ' + titleWord.slice(index);

  return stringWithSpace;
}
