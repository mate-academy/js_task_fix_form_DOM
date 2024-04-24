'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  input.insertAdjacentElement('afterend', label);

  const placeholder = input.name.replace(/([a-z])([A-Z])/g, '$1 $2').trim();

  const formattedPlaceholder =
    placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

  input.setAttribute('placeholder', formattedPlaceholder);

  label.textContent = formattedPlaceholder;

  input.parentElement.appendChild(label);
});
