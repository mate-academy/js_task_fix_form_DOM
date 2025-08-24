'use strict';

function addLabelAndPlaceholders() {
  const form = document.querySelectorAll('form .field input');

  form.forEach((field) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', field.id);
    label.textContent = field.name;
    field.setAttribute('placeholder', field.name);

    field.parentNode.insertBefore(label, field);
  });
}

addLabelAndPlaceholders();
