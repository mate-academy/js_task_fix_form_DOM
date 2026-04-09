'use strict';

const listInput = [...document.querySelectorAll('input')];

listInput.forEach(input => {
  const capLetter = input.name
    .split('')
    .find(ch => ch === ch.toUpperCase());

  const placeholderValue = `${input.name[0].toUpperCase()}`
    + `${input.name.slice(1).split(`${capLetter}`).join(` ${capLetter}`)}`;

  input.setAttribute('placeholder', placeholderValue);
});

listInput.forEach(input => {
  input.parentElement.insertAdjacentHTML('afterbegin', `
    <label for="${input.id}" class="field-label">
      ${input.placeholder}
    </label>
  `);
});
