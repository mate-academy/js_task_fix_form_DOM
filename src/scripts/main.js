'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const indx = input.getAttribute('name')?.indexOf('Name');
  const tName = input.getAttribute('name')?.toLowerCase();
  let txt = tName;

  if (['firstName', 'lastName'].includes(input.getAttribute('name'))) {
    txt = tName.slice(0, indx) + ' ' + tName.slice(indx);
    txt = txt[0].toUpperCase() + txt.slice(1);
  } else {
    txt = txt[0].toUpperCase() + txt.slice(1);
  }

  input.setAttribute('placeholder', txt);

  const lableElem = document.createElement('label');

  lableElem.setAttribute('class', 'field-label');
  lableElem.setAttribute('for', input.getAttribute('id'));
  lableElem.textContent = txt;
  input.insertAdjacentElement('beforebegin', lableElem);
});
