'use strict';

const inputsList = document.querySelectorAll('input');

function splitText(camelString) {
  return camelString.name
    .replace(/([a-z](?=[A-Z]))/g, '$1 ').toUpperCase();
}

for (const element of inputsList) {
  const label = document.createElement('label');

  label.setAttribute('for', `${element.id}`);
  element.setAttribute('placeholder', splitText(element));
  element.before(label);

  label.textContent = `${splitText(element)}`;
}
