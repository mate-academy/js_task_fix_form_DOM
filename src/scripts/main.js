'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

for (const child of inputs) {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.setAttribute('for', child.id);
  newLabel.textContent = child.name;
  child.setAttribute('placeholder', capitalizeFirst(child.name));
  child.parentElement.append(newLabel);
}

function capitalizeFirst(word) {
  return word[0].toUpperCase() + word.slice(1);
}
