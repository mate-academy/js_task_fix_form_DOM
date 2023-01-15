'use strict';

const forms = [...document.querySelectorAll('form')];

for (const form of forms) {
  const formInputs = [...form.querySelectorAll('input')];

  for (const formInput of formInputs) {
    const formLabel = document.createElement('label');

    formLabel.classList.add('field-label');
    formLabel.setAttribute('for', formInput.getAttribute('id'));
    formLabel.textContent = formInput.getAttribute('name');

    formInput.before(formLabel);

    formInput.placeholder = formInput.getAttribute('name')[0].toUpperCase()
      + formInput.getAttribute('name').slice(1).toLowerCase();
  }
}
