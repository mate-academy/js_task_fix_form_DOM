'use strict';

// write code here
const forms = document.querySelectorAll('form');
const tagName = 'input';

const capitalize = (text) => {
  return text[0].toUpperCase() + text.slice(1);
};

const FieldLabel = ({ inputId, inputName }) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = inputId;
  label.setAttribute('for', inputName);

  return label;
};

const createLabels = () => {
  for (const form of forms) {
    [...form.elements].forEach((input) => {
      if (input.tagName === tagName.toUpperCase()) {
        const fieldLabel = FieldLabel({ id: input.id, name: input.name });

        input.placeholder = capitalize(input.name);

        input.parentElement.prepend(fieldLabel);
      }
    });
  }
};

createLabels();
