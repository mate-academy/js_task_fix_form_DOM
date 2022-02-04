'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  const label = document.createElement('label');
  const inputName = el.getAttribute('name').toLowerCase();
  let placeholderName = inputName[0].toUpperCase()
  + inputName.substring(1);

  if (el.getAttribute('name') === 'firstName') {
    placeholderName = 'First name';
  } else if (el.getAttribute('name') === 'lastName') {
    placeholderName = 'Last name';
  }

  el.setAttribute('placeholder', placeholderName);

  el.before(label);
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', el.getAttribute('id'));

  if (el.getAttribute('name') === 'firstName') {
    label.textContent = 'First name';
  } else if (el.getAttribute('name') === 'lastName') {
    label.textContent = 'Last name';
  } else {
    label.textContent = el.getAttribute('name');
  }
});
