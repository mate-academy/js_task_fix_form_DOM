'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((el) => {
  const nameL = el.name;
  const capitalized = nameL.charAt(0).toUpperCase() + nameL.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', el.id);
  label.textContent = capitalized;
  el.placeholder = capitalized;
  el.parentNode.insertBefore(label, el);
});
