'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const currentInput = inputs[i];
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = currentInput.id;

  const capName = capitalizeWord(currentInput.name);

  label.textContent = capName;

  currentInput.placeholder = capName;

  currentInput.before(label);
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
