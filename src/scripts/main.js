'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputText = input.name.split('N').join(' N');
  const label = document.createElement('label');

  input.placeholder = inputText[0].toUpperCase() + inputText.slice(1);
  label.className = 'field-label';
  label.textContent = inputText;
  label.htmlFor = input.id;
  input.parentElement.append(label);
}
