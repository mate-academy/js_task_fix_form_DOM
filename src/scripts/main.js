'use strict';

const formInputs = [...document.querySelectorAll('input')];

formInputs.forEach(input => {
  const inputName = input.name.slice(0, 1).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', inputName);

  input.parentElement.insertAdjacentHTML('beforeend', `
    <label
      class = "field-label"
      for = "${input.id"}>
      ${inputName.toUpperCase()}
    </label>
  `);
});
