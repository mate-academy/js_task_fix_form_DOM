'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const nameAttr = input.name;

  if (!nameAttr) {
    return;
  }

  const formattedName = nameAttr.replace(/([A-Z])/g, ' $1').trim();

  const labelText =
    formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  input.placeholder = labelText;

  const parentContainer = input.parentElement;

  parentContainer.insertBefore(label, input);
});
