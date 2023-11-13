'use strict';

const inputElements = document.querySelectorAll('input');

[...inputElements].forEach(input => {
  input.placeholder = normalizeCamelCase(input.name);

  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">
      ${normalizeCamelCase(input.name)}
    </label>`
  );
});

function normalizeCamelCase(str) {
  const result = str.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1);
}
