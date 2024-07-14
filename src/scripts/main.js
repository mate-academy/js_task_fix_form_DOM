// 'use strict';

const allFields = document.querySelectorAll('input');

allFields.forEach((inputs, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  inputs.setAttribute('for', inputs.id);

  label.textContent =
    inputs.name.charAt(0).toUpperCase() + inputs.name.slice(1);

  inputs.placeholder =
    inputs.name.charAt(0).toUpperCase() + inputs.name.slice(1);

  inputs.parentNode.insertBefore(label, inputs);
});
