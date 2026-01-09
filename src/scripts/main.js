'use strict';

const inputElements = document.querySelectorAll('form input');

inputElements.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', el.id);
  label.textContent = el.name;

  el.placeholder = el.name[0].toUpperCase() + el.name.slice(1);
  el.before(label);
});
