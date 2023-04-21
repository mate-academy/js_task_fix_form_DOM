'use strict';

const forma = document.querySelectorAll('form');
const inputs = [...forma].map(element => element.querySelectorAll('input'));

for (const inputElement of inputs) {
  [...inputElement].map(input => {
    input.insertAdjacentHTML('beforebegin', `
    <label class= "field-label" for="${input.id}">
      ${input.name}
    </label>
    `);

    input.placeholder = input.name.toLocaleUpperCase();
  });
};
