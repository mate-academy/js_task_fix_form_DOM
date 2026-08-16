'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', element.getAttribute('id'));
  label.textContent = element.getAttribute('name');

  element.setAttribute('placeholder', capitalize(element.getAttribute('name')));

  element.before(label);
});

function capitalize(str) {
  const firstLetter = str[0].toUpperCase();
  const copy = firstLetter + str.slice(1);

  return copy;
}
