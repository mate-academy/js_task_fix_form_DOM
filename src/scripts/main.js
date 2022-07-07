'use strict';

const inputs = document.querySelectorAll('.field-text');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].insertAdjacentHTML('beforebegin', `
    <label class='field-label' for=${inputs[i].id}>
      ${inputs[i].name.toUpperCase()}
    </label>`
  );

  inputs[i].placeholder = inputs[i].name[0].toUpperCase()
    + inputs[i].name.slice(1);
}
