'use strict';

const input = document.querySelectorAll('input');

input.forEach(elem => {
  const label = document.createElement('label');
  let inputName = elem.name;

  switch (inputName) {
    case 'firstName':
      inputName = 'first name';
      break;

    case 'lastName':
      inputName = 'last name';
      break;
  }

  label.setAttribute('for', elem.id);
  label.setAttribute('class', 'field-label');
  label.textContent = inputName;
  elem.before(label);
  elem.setAttribute('placeholder', inputName);
  elem.style = 'text-transform: capitalize;';
});
