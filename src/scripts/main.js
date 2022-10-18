'use strict';

const inputs = document.querySelectorAll('input');

function splitUpperText(camelString) {
  return camelString.name
    .replace(/[A-Z]/, ' $&').toUpperCase();
}

for (const element of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', `${element.id}`);
  element.setAttribute('placeholder', splitUpperText(element));
  element.before(label);

  label.textContent = `${splitUpperText(element)}`;
}
