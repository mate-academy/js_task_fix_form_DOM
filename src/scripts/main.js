'use strict';

// write code here
const forms = document.querySelectorAll('form');
const tagName = 'input';

const capitalize = (text) => {
  return text[0].toUpperCase() + text.slice(1);
};

const FieldLabel = ({ id, name }) => {
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.textContent = name;
  label.setAttribute('for', id);

  return label;
};

const createLabels = () => {
  for (const form of forms) {
    [...form.elements].forEach((input) => {
      const { id, name } = input;

      if (input.tagName === tagName.toUpperCase()) {
        const fieldLabel = FieldLabel({ id, name });
        input.placeholder = capitalize(name);

        input.parentElement.prepend(fieldLabel);
      }
    });
  }
};

createLabels();
