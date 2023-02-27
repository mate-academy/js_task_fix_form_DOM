'use strict';

const listInput = [...document.querySelectorAll('input')];

listInput.forEach(input => {
  input.parentElement.insertAdjacentHTML('afterbegin', `
    <label for="${input.id}" class="field-label">
      ${input.name}
    </label>
  `);
});

listInput.forEach(input => {
  const placeholderValue = `${input.name[0].toUpperCase()}`
    + `${input.name.slice(1)}`;

  input.setAttribute('placeholder', `${placeholderValue}`);
});
