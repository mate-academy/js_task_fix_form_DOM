'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">
      ${input.name}
    </label>`
  );

  input.setAttribute(
    'placeholder',
    input.name.substring(0, 1).toUpperCase() + input.name.substring(1)
  );

  input.parentNode.insertAdjacentHTML('beforebegin', `<label></label>`);
}
