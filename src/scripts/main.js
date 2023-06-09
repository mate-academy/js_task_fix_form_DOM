'use strict';

const forms = document.querySelectorAll('form');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

forms.forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const label = document.createElement('label');

    label.setAttribute('for', input.id);
    label.classList.add('field-label');
    label.textContent = capitalize(input.name);

    input.setAttribute('placeholder', capitalize(input.name));

    input.parentNode.insertBefore(label, input);
  });
});
