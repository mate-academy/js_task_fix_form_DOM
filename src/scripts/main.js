'use strict';

const inputs = Array.from(document.querySelectorAll('form input'));

inputs.forEach((input) => {
  const text = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', text);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = text;

  input.parentElement.insertBefore(label, input);
});
