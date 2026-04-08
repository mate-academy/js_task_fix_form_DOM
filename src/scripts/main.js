'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const capName = formatName(input.name);

  label.textContent = capName;
  input.placeholder = capName;

  input.parentNode.insertBefore(label, input);
});

function formatName(title) {
  const withSpaces = title.replace(/([a-z])([A-Z])/g, '$1 $2');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}
