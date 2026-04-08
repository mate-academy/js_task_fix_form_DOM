'use strict';

document.querySelectorAll('form').forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    label.textContent = input.name.replace(/^./, (str) => str.toUpperCase());

    input.placeholder = label.textContent;
    input.parentNode.insertBefore(label, input);
  });
});
