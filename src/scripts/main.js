'use strict';

const formItems = document.querySelectorAll('div.field > input');

formItems.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = input.name.replace(/([A-Z])/g, ' $1');

  input.setAttribute(
    'placeholder',
    input.name.replace(/([A-Z])/g, ' $1').toUpperCase(),
  );

  input.parentNode.insertBefore(label, input);
});
