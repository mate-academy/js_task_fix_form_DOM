'use strict';

function capitalizeFirstLetter(string) {
  const spacedString = string.replace(/([A-Z])/g, ' $1').trim();

  const capitalizedString = spacedString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return capitalizedString;
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for=${input.id}>${input.name}</label>`,
  );
  input.setAttribute('placeholder', capitalizeFirstLetter(input.name));
}
