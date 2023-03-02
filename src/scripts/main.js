'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(named) {
  return (named.charAt(0).toUpperCase()
    + named.slice(1).replace(/([A-Z])/g, ' $1'));
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.innerHTML = capitalize(input.name);
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.name);
  input.setAttribute('placeholder', capitalize(input.name));

  input.parentElement.append(label);
}
