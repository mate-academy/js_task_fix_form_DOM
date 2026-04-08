'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const nameArray = input.name.split('');
  let newName = '';

  for (const char of nameArray) {
    if (newName.length === 0) {
      newName += char.toUpperCase();
      continue;
    }

    if (char === char.toUpperCase()) {
      newName += ' ';
    }

    newName += char;
  }

  const label = `
    <label
      for="${input.id}"
      class="field-label"
    >
      ${newName}
    </label>
  `;

  input.insertAdjacentHTML('beforebegin', label);

  input.placeholder = newName;
});
