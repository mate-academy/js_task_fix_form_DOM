'use strict';

// write code here
const rootElements = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');
const labels = [];

for (let i = 0; i < inputs.length; i++) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.htmlFor = `${inputs[i].id}`;
  item.textContent = `${inputs[i].name}`;
  labels.push(item);
  inputs[i].setAttribute('placeholder', (`${inputs[i].name}`).toUpperCase());
  rootElements[i].append(labels[i]);
}
