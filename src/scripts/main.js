'use strict';

const pageInputs = document.getElementsByTagName('input');

const normalizeInputField = (forms) => {
  for (const input of [...forms]) {
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
};

normalizeInputField(pageInputs);
