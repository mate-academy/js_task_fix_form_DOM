'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const value = input.name;
  const firstLetter = value.charAt(0).toUpperCase();
  const capitalizedName = firstLetter + value.slice(1);

  const label = document.createElement('label');

  label.htmlFor = value;
  label.className = 'field-label';

  let formattedName;

  for (let i = 1; i < value.length; i++) {
    if (value[i] === value[i].toUpperCase()) {
      formattedName = `${value.substring(0, i)} ${value.substring(i)}`;

      label.textContent = formattedName;
      break;
    }

    label.textContent = value;
  }

  input.before(label);
  input.setAttribute('placeholder', capitalizedName);
}
