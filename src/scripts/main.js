'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const attributeName = input.getAttribute('name');

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.getAttribute('id')}">${input.getAttribute('name') === 'firstName' ? 'First Name' : input.getAttribute('name') === 'lastName' ? 'Last Name' : input.getAttribute('name')}</label>`,
  );

  const attribute = input.getAttribute('name').split('');
  const firstLetter = attribute[0].toUpperCase();
  const rest = [...attribute];

  rest.splice(0, 1);

  const result = [firstLetter, ...rest];

  if (attributeName === 'firstName') {
    input.placeholder = 'First Name';
  } else if (attributeName === 'lastName') {
    input.placeholder = 'Last Name';
  } else {
    input.placeholder = result.join('');
  }
});
