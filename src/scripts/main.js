'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const fieldName = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">
      ${fieldName}
    </label>`
  );

  input.setAttribute(
    'placeholder',
    fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
  );
}
