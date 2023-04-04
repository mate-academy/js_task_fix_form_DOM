'use strict';

const forms = document.querySelectorAll('input');

for (const form of forms) {
  const label = document.createElement('label');

  label.htmlFor = form.id;
  label.className = 'field-label';

  const inputName = form.name.split('N').join(' N');

  form.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  label.textContent = form.placeholder;

  form.parentElement.append(label);
};
