'use strict';

const forms = document.querySelectorAll('input');

for (const form of forms) {
  form.placeholder = form.name.charAt(0).toUpperCase()
    + form.name.slice(1).split(/(?=[A-Z])/).join(' ').toLowerCase();

  const item = document.createElement('label');

  form.parentElement.append(item);

  item.className = 'field-label';
  item.htmlFor = [form.id];
  item.textContent = form.placeholder.toUpperCase();
}
