'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function labelText(text) {
  const partLength = Math.ceil(text.length / 2);
  const firstPart = text.slice(0, partLength);
  const secondPart = text.slice(partLength);

  return firstPart + ' ' + secondPart;
}

inputs.forEach((el) => {
  const label = document.createElement('label');

  if (
    el.getAttribute('name') === 'firstName' ||
    el.getAttribute('name') === 'lastName'
  ) {
    label.textContent = labelText(el.getAttribute('name'));
  } else {
    label.textContent = el.getAttribute('name');
  }

  label.className = 'field-label';

  label.setAttribute('for', el.getAttribute('id'));

  el.setAttribute('placeholder', capitalize(label.textContent));

  el.parentNode.prepend(label);
});
