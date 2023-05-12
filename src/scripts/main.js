'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(inp => {
  const label = document.createElement('label');

  label.setAttribute('for', inp.getAttribute('id'));
  label.className = 'field-label';
  label.textContent = getName(inp.getAttribute('name'));

  inp.parentElement.append(label);

  inp.placeholder = getName(inp.getAttribute('name'));
});

function getName(value) {
  let capitalize = value[0].toUpperCase();

  for (let i = 1; i < value.length; i++) {
    if (value[i] === value[i].toLowerCase()) {
      capitalize += value[i];
    } else {
      capitalize += ' ' + value[i].toLowerCase();
    }
  }

  return capitalize;
}
