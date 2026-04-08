'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.setAttribute('for', element.id);

  const labelName =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);

  element.placeholder = labelName;

  label.textContent = labelName;
  label.classList.add('field-label');

  element.parentNode.insertBefore(label, element);
});
