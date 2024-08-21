'use strict';

//  <label for="cheese">Do you like cheese?</label>

// debugger;

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  if (input.name.includes('Name')) {
    input.name = input.name.replace('t', 't ');
  }
  // well... FirstName or First Name ?

  input.setAttribute('placeholder', `${input.name}`);

  const LABEL = `<label class="field-label" for= ${input.id} > ${input.name} </label>`;

  input.insertAdjacentHTML('beforebegin', LABEL);
});
