'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((input) => {
  input.placeholder =
    input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();

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
