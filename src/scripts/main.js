'use strict';

const pageForms = document.getElementsByTagName('form');

const normalizeInputField = (forms) => {
  const formsArray = [...forms];

  for (const form of formsArray) {
    for (const input of form) {
      if (input.className !== 'field-text') {
        continue;
      }

      const labelText = input.name.replace(
        /([a-z])([A-Z])/g,
        '$1 $2'
      ).toLowerCase();

      input.placeholder = labelText.slice(0, 1).toUpperCase()
        + labelText.slice(1);

      input.insertAdjacentHTML('afterend', `
        <label
          class="field-label"
          for=${input.id}
        >
          ${labelText}
        </label>
      `);
    }
  }
};

normalizeInputField(pageForms);
