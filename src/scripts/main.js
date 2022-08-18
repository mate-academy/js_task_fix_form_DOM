'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  let inputText = input.name;

  for (let i = inputText.length - 1; i >= 0; i -= 1) {
    if (inputText[i] === inputText[i].toUpperCase()) {
      inputText = inputText.slice(0, i) + ' ' + inputText.slice(i);
    }
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = inputText;

  input.placeholder = inputText[0].toUpperCase()
  + inputText.slice(1);

  input.parentElement.append(label);
});
