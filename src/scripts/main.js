'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((input) => {
  const normalizedInputName = input.name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toUpperCase();

  input.placeholder = normalizedInputName;

  input.insertAdjacentHTML(
    'afterend',
    `<label
      class='field-label'
      for=#${input.id}
    >
      ${normalizedInputName}
    </label>`,
  );
});
