'use strict';

const inputs = document.querySelectorAll('.field input');

const firstLetterToUpperCase = (str = '') =>
  str[0].toUpperCase() + str.slice(1);

const createLabelNode = (text = '', inputId) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = text.toUpperCase();
  label.dataset.for = inputId;

  return label;
};

inputs.forEach((input) => {
  const inputLabel = createLabelNode(input.name, input.id);
  const inputContainer = input.parentNode;

  inputContainer.prepend(inputLabel);

  input.placeholder = firstLetterToUpperCase(input.name);
});
