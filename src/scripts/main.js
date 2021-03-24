'use strict';

const allInputs = document.querySelectorAll('.field-text');

for (const input of allInputs) {
  input.insertAdjacentHTML('beforebegin',
    `<label class = 'field-label' for = '${input.id}'>
  ${input.name.replace(/([A-Z]+)/g, ' $1')}</label>`
  );

  input.setAttribute('placeholder',
    `${input.name
      .charAt(0).toUpperCase()
    }${input.name
      .slice(1)
      .replace(/([A-Z]+)/g, ' $1')}
    `);
}
