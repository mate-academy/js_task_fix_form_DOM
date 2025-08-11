'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((element) => {
  const inputName = element.getAttribute('name');

  const existingLabel = element.previousElementSibling;
  const hasLabel =
    existingLabel &&
    existingLabel.classList.contains('field-label') &&
    existingLabel.htmlFor === element.id;

  if (!hasLabel) {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = element.id;
    label.textContent = inputName;
    element.before(label);
  }

  if (!element.hasAttribute('placholder')) {
    element.placeholder =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);
  }
});
