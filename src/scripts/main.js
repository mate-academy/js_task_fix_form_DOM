'use strict';

const inputs = [...document.querySelectorAll('input')];

function normalisedNames(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return str.slice(0, i) + ' ' + str.slice(i).toLowerCase();
    }
  }

  return str;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = normalisedNames(input.name);

  input.parentElement.append(label);
};

inputs.map(el => {
  const field = normalisedNames(el.name);

  el.placeholder = field[0].toUpperCase() + field.slice(1).toLowerCase();
});
