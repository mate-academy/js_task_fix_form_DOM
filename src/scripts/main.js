'use strict';

const inputData = document.querySelectorAll('input');

inputData.forEach((input) => {
  const label = document.createElement('label');

  const labelName = input.name;

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelName;

  const namePlaceholder =
    labelName.charAt(0).toUpperCase() + labelName.slice(1).toLowerCase();

  input.placeholder = namePlaceholder;

  input.parentNode.insertBefore(label, input);
});
