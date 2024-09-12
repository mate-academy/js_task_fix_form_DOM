'use strict';

// write code here
const INPUTS = Array.from(document.querySelectorAll('.field-text'));

INPUTS.forEach((el) => {
  el.placeholder = el.name[0].toUpperCase() + el.name.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.innerText = el.name;

  el.parentNode.appendChild(label);
});
