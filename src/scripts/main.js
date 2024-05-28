'use strict';

const inputElements = [...document.querySelectorAll('.field-text')];

inputElements.forEach((el) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.id);
  label.textContent = el.name.toUpperCase();

  el.before(label);

  el.setAttribute('placeholder', el.name);
});
