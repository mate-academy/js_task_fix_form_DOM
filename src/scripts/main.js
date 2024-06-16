'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  const labelName =
    input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();

  label.textContent = labelName;
  label.classList.add('field-label');

  input.parentNode.insertBefore(label, input);

  input.setAttribute('placeholder', labelName);
});
