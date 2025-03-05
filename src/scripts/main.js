'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const labels = document.createElement('label');

  labels.classList.add('field-label');

  if (!input.id) {
    input.id = input.name;
  }
  labels.setAttribute('for', input.id);
  labels.textContent = toTitleCase(input.name);
  input.placeholder = toTitleCase(labels.textContent);

  input.parentNode.insertBefore(labels, input);
});

function toTitleCase(str) {
  if (!/[A-Z]/.test(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, s => s.toUpperCase());
}
