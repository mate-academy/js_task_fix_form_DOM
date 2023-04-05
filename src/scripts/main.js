'use strict';

const inputFields = document.querySelectorAll('input');

for (const input of inputFields) {
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  for (let letter = 1; letter < input.name.length; letter++) {
    if (input.name[letter] === (input.name[letter]).toUpperCase()) {
      input.placeholder = input.placeholder.substring(0, letter)
      + ' ' + input.name.substring(letter, input.name.length);
    }
  }

  input.insertAdjacentHTML('beforebegin', `
  <label class ="field-label" for="${input.id}">${input.name}</label>`);
};
