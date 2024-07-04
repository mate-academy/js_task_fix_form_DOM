'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.getAttribute('id')}">${input.getAttribute('name')}</label>`,
  );

  const attribute = input.getAttribute('name').split('');
  const firstLetter = attribute[0].toUpperCase();
  const rest = [...attribute];

  rest.splice(0, 1);

  const result = [firstLetter, ...rest];

  input.placeholder = result.join('');
});
