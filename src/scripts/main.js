'use strict';

// write code here
const inputs = document.querySelectorAll('input');

const formatName = (str) => {
  let res = '';

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      res += '-';
    }
    res += str[i];
  }

  return str[0] + res;
};

[...inputs].map((input) => {
  input.placeholder = formatName(input.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.innerHTML = formatName(input.name).toUpperCase();
  input.parentNode.prepend(label);
});
