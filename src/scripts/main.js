'use strict';

const divList = document.querySelectorAll('.field');

function getLabelForInput(item) {
  const label = document.createElement('label');

  const input = item.children[0];

  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();
  label.className = 'field-label';
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  item.append(label);
}

[...divList].map(getLabelForInput);
