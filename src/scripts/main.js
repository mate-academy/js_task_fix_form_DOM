'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.id}"></label>`,
  );

  const labels = document.querySelectorAll('label');

  for (const label of [...labels]) {
    label.textContent = input.name;
  }

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
