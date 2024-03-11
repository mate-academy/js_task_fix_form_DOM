'use strict';

document.querySelectorAll('form').forEach((form) => {
  form.querySelectorAll('div.field > input').forEach((input) => {
    const fieldName = input.getAttribute('name');
    const fieldId = input.getAttribute('id');

    input.setAttribute(
      'placeholder',
      fieldName.slice(0, 1).toUpperCase() + fieldName.slice(1),
    );

    const label = document.createElement('label');

    label.classList = 'field-label';
    label.setAttribute('for', fieldId);
    label.textContent = fieldName.toUpperCase();

    input.parentNode.insertBefore(label, input);
  });
});
