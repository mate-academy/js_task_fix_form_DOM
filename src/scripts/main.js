'use strict';

function formatAllText(placeholder) {
  let newText = '';

  for (let i = 0; i < placeholder.length; i++) {
    if (placeholder[i] === placeholder[i].toUpperCase()) {
      newText += ' ';
    }

    newText += placeholder[i];
  }

  return newText;
}

const dataInputs = document.querySelectorAll('.field-text');

for (let i = 0; i < dataInputs.length; i++) {
  const placeholderValue = dataInputs[i].name;

  const inputParent = dataInputs[i].parentElement;

  const label = document.createElement('label');

  inputParent.prepend(label);
  label.htmlFor = dataInputs[i].id;
  label.className = 'field-label';
  label.innerText = formatAllText(placeholderValue);

  dataInputs[i].placeholder = `${formatAllText(placeholderValue)}`;
}
