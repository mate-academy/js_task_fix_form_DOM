'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((input) => {
  input.placeholder = input.name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toUpperCase();

  input.insertAdjacentHTML(
    'afterend',
    `<label
      class='field-label'
      for=#${input.id}
    >
      ${input.name}
    </label>`,
  );
});
