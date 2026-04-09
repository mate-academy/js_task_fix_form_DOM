'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((a) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.for = a.id;
  label.innerText = a.name.toUpperCase();
  a.placeholder = a.name.toUpperCase();
  a.parentElement.prepend(label);

  return a;
});
