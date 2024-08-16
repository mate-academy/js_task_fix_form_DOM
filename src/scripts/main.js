'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.textContent = el.getAttribute('name').toLowerCase();

  label.className = 'field-label';

  label.setAttribute('for', el.getAttribute('id'));

  el.setAttribute('placeholder', capitalize(label.textContent));

  el.parentNode.prepend(label);
});
