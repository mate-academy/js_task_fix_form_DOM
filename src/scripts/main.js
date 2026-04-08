'use strict';

const inputs = document.querySelectorAll('input');

labelFactory(inputs);
placeholderFactory(inputs);

function labelFactory(allInputs) {
  for (let i = 0; i < allInputs.length; i++) {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = allInputs[i].id;
    label.textContent = capitalizeText(allInputs[i].name);
    allInputs[i].parentElement.prepend(label);
  }
}

function placeholderFactory(allInputs) {
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].placeholder = capitalizeText(allInputs[i].name);
  }
}

function capitalizeText(text = '') {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result += ' ';
    }
    result += text[i].toUpperCase();
  }

  return result;
}
