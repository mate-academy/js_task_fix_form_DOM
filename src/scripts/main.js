'use strict';

// write code here
const forms = document.querySelectorAll('form');
const tagName = 'input';

const splitText = (text) => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result += ' ' + text[i];
    } else {
      result += text[i];
    }
  }

  return result;
};

const capitalize = (text) => {
  return text[0].toUpperCase() + text.slice(1);
};

const FieldLabel = ({ inputId, inputName }) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = inputName;
  label.setAttribute('for', inputId);

  return label;
};

const createLabels = () => {
  for (const form of forms) {
    [...form.elements].forEach((input) => {
      if (input.tagName === tagName.toUpperCase()) {
        const fieldLabel = FieldLabel({
          inputId: input.id,
          inputName: splitText(input.name),
        });

        input.placeholder = splitText(capitalize(input.name));
        input.parentElement.prepend(fieldLabel);
      }
    });
  }
};

createLabels();
