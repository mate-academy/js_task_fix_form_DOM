'use strict';

const forms = document.querySelectorAll('form');
const inputs = [];
let counter = 0;
const allowedTypes = [
  'text',
  'email',
  'password',
  'number',
  'tel',
  'url',
  'search',
  'date'
];

forms.forEach((form) => {
  const formInputs = form.querySelectorAll('input');

  inputs.push(...formInputs);
});

inputs.forEach((input) => {
  if (!input.name) {
    return;
  }
  if (input.type && !allowedTypes.includes(input.type)) { return; }
  
if (!input.id) {
      const baseId = input.name.trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9\-_]/g, '');

      input.id = `${baseId}-${counter++}`;
    }


  const wrapper = input.parentElement;

  if (!wrapper) {
    return;
  }
  if (wrapper.querySelector('.field-label')) { return; }
  
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const raw = (input.name || 'field').replace(/[-_]/g, ' ').trim();


  const text = raw.charAt(0).toUpperCase() + raw.slice(1);

  label.textContent = text;
  input.placeholder = text;

  wrapper.insertBefore(label, input);

});
