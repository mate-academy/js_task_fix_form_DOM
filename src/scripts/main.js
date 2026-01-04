'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = el.id;
  label.textContent = el.name[0].toUpperCase() + el.name.slice(1);
  el.placeholder = el.name[0].toUpperCase() + el.name.slice(1);
  el.parentElement.append(label);
});
