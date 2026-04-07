'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form, formIndex) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input, inputIndex) => {
    const inputName = input.getAttribute('name');

    if (!input.getAttribute('id')) {
      input.setAttribute('id', `input-${formIndex}-${inputName}-${inputIndex}`);
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.getAttribute('id'));
    label.textContent = inputName;
    input.parentElement.append(label);

    input.setAttribute(
      'placeholder',
      inputName[0].toUpperCase() + inputName.slice(1),
    );
  });
});
