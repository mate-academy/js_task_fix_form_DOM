'use strict';

const inform = document.querySelectorAll('form');

inform.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.setAttribute(
      'placeholder',
      input.name.charAt(0).toUpperCase() + input.name.slice(1),
    );

    input.parentNode.insertBefore(label, input);
  });
});
