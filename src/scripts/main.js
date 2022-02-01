/* eslint-disable no-unused-expressions */
'use strict';

document.querySelectorAll('input');

const input = document.querySelectorAll('input');

for (const item of input) {
  let inputtext = (item.name[0].toUpperCase()
   + item.name.slice(1));

  inputtext === 'FirstName' ? inputtext = 'First Name' : inputtext;
  inputtext === 'LastName' ? inputtext = 'Last Name' : inputtext;

  item.placeholder = inputtext;

  const elem = document.createElement('label');

  elem.setAttribute('class', 'field-label');
  elem.setAttribute('id', item.id);

  elem.textContent = inputtext;
  item.parentElement.prepend(elem);
}
