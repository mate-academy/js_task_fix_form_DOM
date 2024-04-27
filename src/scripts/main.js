'use strict';

const inputs = document.querySelectorAll('form input');

function capitalize(word = '') {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

inputs.forEach((el) => {
  const id = el.id;
  // eslint-disable-next-line no-shadow
  const name = el.name;
  const parentNode = el.parentNode;
  const label = document.createElement('label');

  label.htmlFor = id;
  label.textContent = name;
  label.className = 'field-label';

  parentNode.append(label);
  el.placeholder = capitalize(name);
});
