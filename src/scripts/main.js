'use strict';
/*
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (!input.value) {
      return;
    }

    const label = document.createElement('label');

    label.classList.add('field__label');
    label.setAttribute('for', input.id);

    label.textContent = input.name;

    input.parentElement.insertBefore(label, input);

    const placegolderText =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.setAttribute('placeholder', placegolderText);
  });
}); */

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (!input.name) {
      return;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name;

    input.parentElement.insertBefore(label, input);

    const placeholderText =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.setAttribute('placeholder', placeholderText);
  });
});
