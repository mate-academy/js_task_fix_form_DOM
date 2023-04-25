'use strict';

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;
    input.placeholder = capitalize(input.name);
    input.after(label);
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
