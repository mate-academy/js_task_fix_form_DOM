'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const createLabel = document.createElement('label');

    createLabel.classList.add('field-label');
    createLabel.setAttribute('for', input.id);

    const labelText = input.name
      .replace(/(?:^|_)(\w)/g, (item) => item.toUpperCase())
      .replace(/_/g, ' ');

    createLabel.textContent = labelText;
    input.placeholder = labelText;

    input.parentNode.insertBefore(createLabel, input.nextSibling);
  });
});
