'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    const formattedName = input.name
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    label.textContent = formattedName;

    input.setAttribute('placeholder', formattedName);

    input.parentElement.insertBefore(label, input);
  });
});
