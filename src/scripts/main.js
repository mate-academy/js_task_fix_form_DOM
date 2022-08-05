'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.textContent = goodName(input.name);
  label.className = 'field-label';

  input.placeholder = goodName(input.name);

  input.before(label);
};

function goodName(string) {
  const newStr = string.split('');

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].toUpperCase() === newStr[i]) {
      newStr[i] = ' ' + newStr[i];
    };
  };

  return newStr[0].toUpperCase() + newStr.join('').slice(1);
};
