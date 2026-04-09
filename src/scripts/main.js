'use strict';

function processInputs(form) {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.getAttribute('name');
    const inputId = input.getAttribute('id') || inputName;

    const label = document.createElement('label');

    label.className = 'field-label';

    label.setAttribute('for', inputId);

    const capitalizedInputName =
      inputName.charAt(0).toLocaleUpperCase() + inputName.slice(1);

    label.textContent = capitalizedInputName;

    input.setAttribute('placeholder', capitalizedInputName);

    input.parentNode.insertBefore(label, input);

    if (!input.getAttribute('id')) {
      input.setAttribute('id', inputId);
    }
  });
}

document.querySelectorAll('form').forEach((form) => processInputs(form));
