'use strict';

const inputsList = [...document.querySelectorAll('input')];

function capitalize(text) {
  return String(text).charAt(0).toUpperCase() + String(text).slice(1);
}

inputsList.forEach((el) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', el.id);
  label.textContent = capitalize(el.name);

  el.parentNode.insertBefore(label, el);

  el.setAttribute('placeholder', capitalize(el.name));
});
