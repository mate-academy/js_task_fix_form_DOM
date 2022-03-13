'use strict';

const inputs = [...document.querySelectorAll('.field')];

inputs.forEach((field) => {
  field.insertAdjacentHTML(
    'afterbegin',
    `
    <label class ="field-label" for = "${field.children[0].id}">
      ${field.children[0].name}
    </label>
    `
  );

  field.children[1].placeholder
    = field.children[1].name.toUpperCase()[0]
    + field.children[1].name.slice(1);
});
