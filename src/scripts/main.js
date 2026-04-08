'use strict';

// write code here

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const newLabel = document.createElement('label');

    newLabel.setAttribute('for', input.id);
    newLabel.classList.add('field-label');

    const formattedInputText = input.name
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/^./, (str) => str.toUpperCase());

    newLabel.textContent = formattedInputText;
    input.placeholder = formattedInputText;

    input.parentElement.prepend(newLabel);
  });
});
