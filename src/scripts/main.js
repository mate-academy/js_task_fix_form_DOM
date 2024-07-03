'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  let txt;
  if (input.getAttribute('name') === 'firstName') {
    txt = 'First name';
  } else if (input.getAttribute('name') === 'lastName') {
    txt = 'Last name';
  } else {
    txt = input.getAttribute('name');
  }

  input.setAttribute('placeholder', txt);

  const lableElem = document.createElement('label');

  lableElem.setAttribute('class', 'field-label');
  lableElem.setAttribute('for', input.getAttribute('id'));
  lableElem.textContent = txt;
  input.insertAdjacentElement('beforebegin', lableElem);
});
