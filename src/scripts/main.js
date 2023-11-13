'use strict';

const inputElements = document.querySelectorAll('input');

[...inputElements].forEach(input => {
  input.placeholder = capitalize(input.name);

  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">
      ${input.name}
    </label>`
  );
});

function capitalize(str) {
  const result = str.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1);
}
