'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  input.insertAdjacentHTML('afterend',
    `<label
      for='addGap(${input.name})'
      class='field-label' >${input.name}
    </label>`
  );

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
