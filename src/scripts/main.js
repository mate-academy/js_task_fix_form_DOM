'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const value = input.name;
  const toShow = value.toUpperCase();
  const lbl = document.createElement('label');
  const forWho = input.id;

  lbl.className = 'field-label';
  lbl.id = value;
  lbl.innerText = toShow;
  lbl.for = forWho;

  input.placeholder = value.charAt(0).toUpperCase() + value.slice(1);
  input.before(lbl);
});
