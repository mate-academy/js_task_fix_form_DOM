'use strict';

const inputs = document.querySelectorAll('form input');

function formatLabelText(nName) {
  const spaced = nName.replace(/([A-Z])/g, ' $1');

  return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
}

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');

  input.placeholder = formatLabelText(inputName);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatLabelText(inputName);

  input.parentElement.appendChild(label);
});
