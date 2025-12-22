'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  let value = input.name;

  if (value === 'firstName') {
    value = 'first Name';
  } else if (value === 'lastName') {
    value = 'last Name';
  }

  const toShow = value.toUpperCase();
  const lbl = document.createElement('label');
  const forWho = input.id;

  lbl.className = 'field-label';
  lbl.id = value;
  lbl.textContent = toShow;
  lbl.htmlFor = forWho;

  input.placeholder = value.charAt(0).toUpperCase() + value.slice(1);
  input.before(lbl);
});
