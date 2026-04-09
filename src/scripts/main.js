'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'label-field';
  label.htmlFor = input.id;
  label.textContent = formattedString(input.name);

  input.before(label);
  input.placeholder = formattedString(input.name);
});

function formattedString(string) {
  let str = string;

  for (let i = 1; i < string.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str = `${str[0].toUpperCase()}${str.slice(1, i)} ${str.slice(i).toLowerCase()}`;
    } else {
      str = `${str[0].toUpperCase()}${str.slice(1)}`;
    }
  }

  return str;
}
