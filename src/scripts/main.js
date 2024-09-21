'use strict';

// write code here

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input.id);

    input.setAttribute(
      'placeholder',
      input.name.charAt(0).toUpperCase() + input.name.slice(1),
    );

    label.textContent = input.name;

    input.insertAdjacentElement('beforebegin', label);
  });
});
