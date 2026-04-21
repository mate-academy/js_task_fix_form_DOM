'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.name;

    if (!input.id) {
      input.id = inputName;
    }

    const labelText = inputName[0].toUpperCase() + inputName.slice(1);

    // placeholder
    input.placeholder = labelText;

    // label
    const label = document.createElement('label');
    label.classList.add('field-label');
    label.htmlFor = input.id;
    label.textContent = labelText;

    // вставляем в родителя
    input.parentElement.insertBefore(label, input);
  });
});
