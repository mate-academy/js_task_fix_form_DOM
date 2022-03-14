'use strict';

const inputs = [...document.querySelectorAll('.field')];

inputs.forEach((field) => {
  field.insertAdjacentHTML(
    'afterbegin',
    `
    <label class ="field-label" for = "${field.children[0].id}">
      ${field.children[0].name.split('Name').join(' Name')}
    </label>
    `
  );

  field.children[1].placeholder
    = field.children[1].name.toUpperCase()[0]
    + field.children[1].name.slice(1).split('Name').join(' Name');
});
