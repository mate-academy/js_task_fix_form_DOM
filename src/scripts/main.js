'use strict';

const forms = document.querySelectorAll('input');

for (const form of forms) {
  let result = '';
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = form.id;
  label.textContent = form.name;

  for (let i = 0; i < form.name.length; i++) {
    if (form.name[i] === form.name[i].toUpperCase() && i > 0) {
      result += ' ';
    }
    result += form.name[i];
  }
  result = result.toLowerCase();

  result = result[0].toUpperCase() + result.slice(1);

  form.placeholder = result;

  form.before(label);
}
