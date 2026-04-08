'use strict';

const inputElements = [...document.querySelectorAll('form input')];

inputElements.forEach((el) => {
  const parentEl = el.parentElement;
  const label = document.createElement('label');
  const nameEl = el.getAttribute('name');
  const correctName = nameEl[0].toUpperCase() + nameEl.slice(1, nameEl.length);

  label.className = 'field-label';
  label.htmlFor = el.getAttribute('id');
  label.textContent = nameEl;

  parentEl.append(label);
  el.setAttribute('placeholder', correctName);
});
