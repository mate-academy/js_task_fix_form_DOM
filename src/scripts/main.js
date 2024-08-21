'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const placeholderName = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholderName);

  const label = `<label class="field-label" for= ${input.id} > ${input.name} </label>`;

  input.insertAdjacentHTML('beforebegin', label);
});
