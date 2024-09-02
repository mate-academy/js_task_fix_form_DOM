'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  function formattedInput(inputName) {
    let result = '';

    for (let i = 0; i < inputName.length; i++) {
      if (/^[A-Z]$/.test(inputName[i])) {
        result += ' ';
      }

      result += inputName[i];
      result.toLocaleLowerCase();
    }

    const formattedResult =
      result[0].toUpperCase() + result.slice(1).toLowerCase();

    return formattedResult;
  }

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('for', input.id);
    label.classList.add('field-label');
    label.textContent = formattedInput(input.name);

    input.placeholder = formattedInput(input.name);

    input.insertAdjacentElement('beforebegin', label);
  });
});
