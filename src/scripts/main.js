'use strict';

const forms = document.querySelectorAll('form');

const fields = [...forms].flatMap((form) => [
  ...form.querySelectorAll('input'),
]);

fields.forEach((el) => {
  const inputName = el.getAttribute('name');
  const placeholder =
    inputName.charAt(0).toUpperCase() + inputName.toLowerCase().slice(1);

  el.setAttribute('placeholder', placeholder);
  addLabel(el, inputName);
});

function addLabel(input, inputName) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const inputID = input.getAttribute('id');

  label.textContent = inputName;
  label.setAttribute('for', inputID);

  input.before(label);
}
