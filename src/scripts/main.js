'use strict';

const inputs = document.querySelectorAll('input');

Array.from(inputs).forEach((input) => {
  const capitalizedName =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalizedName;

  input.parentElement.appendChild(label);
  input.placeholder = capitalizedName;
});
