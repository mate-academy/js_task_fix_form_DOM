'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.map(field => {
  const input = field.querySelector('.field-text');
  const inputName = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = inputName;

  return (
    field.insertAdjacentHTML('afterbegin', `
      <label
        class="field-label"
        for="${input.id}"
      >${inputName}</label>
    `)
  );
});
