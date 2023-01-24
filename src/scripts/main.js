'use strict';

const allInputs = document.querySelectorAll('input');

for (const el of allInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = el.id;
  label.textContent = capitalize(el.name);

  el.parentElement.append(label);
  el.placeholder = capitalize(el.name);
}

function capitalize(value) {
  let result = value[0].toUpperCase();

  for (let i = 1; i < value.length; i++) {
    if (value[i] === 'N') {
      result += ' N';
    } else {
      result += value[i];
    }
  }

  return result;
}
