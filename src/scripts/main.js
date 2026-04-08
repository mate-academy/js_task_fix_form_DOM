'use strict';

const data = document.querySelectorAll('input');

function splitName(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

function capitilize(string) {
  const result = splitName(string);

  return result[0].toUpperCase() + result.slice(1);
}

data.forEach((input) => {
  const label = document.createElement('label');
  const content = input.getAttribute('name');

  input.setAttribute('placeholder', capitilize(content));

  label.classList.add('field-label');
  label.htmlFor = content;
  label.id = content;
  label.textContent = splitName(content);

  input.before(label);
});
