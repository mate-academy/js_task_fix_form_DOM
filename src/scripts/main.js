/* eslint-disable max-len */
'use strict';

addEventListener('DOMContentLoaded', () => {
  const fixFormInit = () => {
    const fields = document.querySelectorAll('.field');

    if (fields.length) {
      const getPlaceholder = (inputName) => {
        return inputName.charAt(0).toUpperCase() + inputName.slice(1);
      };

      const getLabel = (labelId, labelName) => {
        const label = document.createElement('label');
        const labelNameWithSpace = labelName.replace(/([A-Z])/g, ' $1').trim();

        label.classList.add('field-label');
        label.textContent = labelNameWithSpace;
        label.for = labelId;

        return label;
      };

      fields.forEach((field) => {
        const input = field.querySelector('.field-text');
        const inputName = input.name;
        const inputPlaceholder = getPlaceholder(inputName);
        const inputId = input.id;
        const label = getLabel(inputId, inputName);

        input.placeholder = inputPlaceholder;
        field.prepend(label);
      });
    }
  };

  fixFormInit();
});
