'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const separatedName = input.name.replace(/([A-Z])/, ' $1');

  input.placeholder = separatedName[0].toUpperCase() + separatedName.slice(1);

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.id}">
      ${separatedName}
    </label>`
  );
}
