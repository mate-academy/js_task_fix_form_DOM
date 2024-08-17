'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function labelText(text) {
  const partLength = Math.ceil(text.length / 2);
  const firstPart = text.slice(0, partLength);
  const secondPart = text.slice(partLength);

  if (text === 'firstName' || text === 'lastName') {
    return firstPart + ' ' + secondPart;
  }

  return text;
}

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.textContent = labelText(el.getAttribute('name'));

  label.className = 'field-label';

  label.setAttribute('for', el.getAttribute('id'));

  el.setAttribute(
    'placeholder',
    capitalize(el.getAttribute('name').toLowerCase()),
  );

  el.parentNode.prepend(label);
});
