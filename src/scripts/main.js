'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(inp => {
  const label = document.createElement('label');

  label.classList = 'field-label';
  label.htmlFor = inp.id;

  label.textContent = inp.name.includes('val')
    ? inp.name.replace('val', 'val')
    : inp.name;

  inp.parentElement.append(label);

  inp.placeholder = label.textContent[0].toUpperCase()
    + label.textContent.substring(1);
});
