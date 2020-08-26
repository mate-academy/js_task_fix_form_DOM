'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
      ${spacedName(input.name)}
    </label>
  `);

  input.placeholder = spacedName(
    input.name[0].toUpperCase() + input.name.slice(1)
  );
}

function spacedName(string) {
  if (string.includes('Name')) {
    return string.slice(0, -4) + ' ' + string.slice(-4).toLowerCase();
  }

  return string;
}
