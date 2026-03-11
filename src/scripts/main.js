'use strict';

const allForms = document.querySelectorAll('form');

allForms.forEach((form) => {
  const inputInThisForm = form.querySelectorAll('input');

  inputInThisForm.forEach((input) => {
    const inputName = input.name;
    const formattedName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.placeholder = formattedName;

    const newLabel = document.createElement('label');

    newLabel.classList.add('field-label');
    newLabel.htmlFor = input.id;
    newLabel.textContent = formattedName;
    input.parentElement.appendChild(newLabel);
  });
});
