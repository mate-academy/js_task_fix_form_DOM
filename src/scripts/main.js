'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const nameValue = input.name;
  const nameWithSpace = nameValue.replace(/([A-Z])/g, ' $1');
  const labelText =
    nameWithSpace.charAt(0).toUpperCase() + nameWithSpace.slice(1);

  label.textContent = labelText;
  input.placeholder = labelText;
  input.parentNode.insertBefore(label, input);
});
