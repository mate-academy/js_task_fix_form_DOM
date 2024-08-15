'use strict';

const forms = [...document.querySelectorAll('.field')];

forms.forEach((field) => {
  const label = document.createElement('label');
  const input = field.querySelector('input');
  const normalizePlaceholder =
    input.name[0].toUpperCase() + input.name.substring(1).toLowerCase();

  label.setAttribute('for', input.id);
  label.textContent = input.name;
  label.classList.add('field-label');
  input.placeholder = normalizePlaceholder;
  field.insertBefore(label, input);
});
