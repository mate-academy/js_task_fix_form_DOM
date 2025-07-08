'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;

  // if input don't have ID - add it;

  if (!input.id) {
    input.id = `input-${inputName}`;
  }

  const id = input.id;

  // create Label
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', id);

  // make Content from big letter

  const capitalizedName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.textContent = capitalizedName;

  // add label before input;

  input.parentElement.insertBefore(label, input);

  // add placeholder

  input.ariaPlaceholder = capitalizedName;
});
