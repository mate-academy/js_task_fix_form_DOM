'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = capitalize(input.name);

    input.placeholder = capitalize(input.name);

    input.parentElement.insertBefore(label, input);
  });
});

function capitalize(str) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
