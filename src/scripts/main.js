'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const labelName = element.getAttribute('name');
  const capitalized =
    labelName.toString()[0].toUpperCase() + labelName.slice(1);

  label.textContent = capitalized;

  if (!element.id) {
    element.id = `input-${labelName}`;
  }

  label.setAttribute('for', element.id);

  element.placeholder = capitalized;

  element.parentElement.insertBefore(label, element);
});
