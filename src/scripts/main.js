'use strict';

const form = document.querySelectorAll('form');
const inputs1 = form[0].querySelectorAll('input');
const inputs2 = form[1].querySelectorAll('input');

for (const input of inputs1) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.id}">
      ${input.name}
    </label>`,
  );

  const placeholders =
    input.name[0].toUpperCase() + input.name.slice(1).toLowerCase();

  input.placeholder = placeholders;
}

for (const input of inputs2) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.id}">
      ${input.name}
    </label>`,
  );

  const placeholders =
    input.name[0].toUpperCase() + input.name.slice(1).toLowerCase();

  input.placeholder = placeholders;
}
