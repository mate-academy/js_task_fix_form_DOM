'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelName = normalizeName(input.name);

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.id}">${labelName}</label>`,
  );
  input.setAttribute('placeholder', labelName);
}

function normalizeName(inputName) {
  let normalizedName = '';

  for (const ch of inputName) {
    if (ch === ch.toUpperCase()) {
      normalizedName += ' ' + ch.toLowerCase();
      continue;
    }
    normalizedName += ch;
  }

  normalizedName = normalizedName[0].toUpperCase() + normalizedName.slice(1);

  return normalizedName;
}
