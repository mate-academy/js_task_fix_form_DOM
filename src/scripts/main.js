'use strict';

const forms = document.querySelectorAll('input');

for (const form of forms) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = form.id;
  label.textContent = form.name;

  form.placeholder = form.name;

  form.before(label);
}
