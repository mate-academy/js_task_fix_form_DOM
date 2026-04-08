'use strict';

const inputList = document.querySelectorAll('.field input');

[ ...inputList ].forEach((input) => {
  const inputIdAttr = input.id;
  const inputName = input.name;
  let placeholderText = inputName[0].toUpperCase();

  for (let i = 1; i < inputName.length; i++) {
    if (inputName[i] === inputName[i].toUpperCase()) {
      placeholderText += ' ';
    }

    placeholderText += inputName[i];
  }

  input.placeholder = placeholderText;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.for = inputIdAttr;
  label.textContent = placeholderText.toUpperCase();

  input.before(label);
});
