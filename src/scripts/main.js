'use strict';

// write code here
const INPUTS = Array.from(document.querySelectorAll('.field-text'));

INPUTS.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const str = (el.name[0].toUpperCase() + el.name.slice(1)).replace(
    /([a-z])([A-Z])/g,
    '$1 $2',
  );

  label.innerText = str;
  el.placeholder = str;

  el.parentNode.appendChild(label);
});
