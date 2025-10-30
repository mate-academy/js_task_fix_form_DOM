'use strict';

const fields = document.querySelectorAll('form input');

for (const field of fields) {
  const labelName = field.getAttribute('id');
  const inputName = field.getAttribute('name');
  const label = document.createElement('label');

  const formatted = inputName.replace(/([A-Z])/g, ' $1');
  const capitalize = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  label.textContent = capitalize;
  label.classList.add('field-label');
  label.setAttribute('for', labelName);
  field.parentNode.insertBefore(label, field);

  field.setAttribute('placeholder', capitalize);
}
