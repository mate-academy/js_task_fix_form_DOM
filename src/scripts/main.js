'use strict';

const inputs = [
  ...document.querySelectorAll(
    'input:not([type="submit"]):not([type="button"])',
  ),
];

inputs.forEach((input) => {
  if (!input.id || !input.name) {
    return;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const labelName = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

  label.textContent = labelName;
  input.placeholder = labelName;

  input.before(label);
});
