'use strict';

const input = document.querySelectorAll('.field-text');

for (let i = 0; i < input.length; i++) {
  input[i].insertAdjacentHTML('beforebegin', `
    <label class='field-label' for=${input[i].id}>
      ${input[i].name.toUpperCase()}
    </label>`
  );

  input[i].placeholder = input[i].name[0].toUpperCase()
    + input[i].name.slice(1);
}
