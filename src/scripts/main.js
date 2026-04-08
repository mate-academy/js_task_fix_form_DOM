'use strict';

document.querySelectorAll('form .field').forEach((field) => {
  const inputEl = field.querySelector('input');
  const inputName = capitalizeFirstLetter(
    humanizeName(inputEl.name).toLowerCase(),
  );

  field.insertAdjacentHTML(
    'afterbegin',
    `<label class="field-label" for="${inputEl.id}">${inputName}</label>`,
  );

  inputEl.placeholder = inputName;
});

function humanizeName(str) {
  return str.replace(/([A-Z])/g, ' $1');
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
