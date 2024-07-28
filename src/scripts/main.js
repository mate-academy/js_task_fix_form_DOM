'use strict';

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.htmlFor = input.id;
    label.textContent = capitalize(input.name);

    input.placeholder = capitalize(input.name);

    const inputParent = input.parentElement;

    inputParent.insertBefore(label, input);
  });
});
