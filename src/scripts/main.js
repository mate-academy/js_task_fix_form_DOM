'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

const capitalizeFristLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

function formatCamelCase(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      result += s[i];
    } else {
      result += ' ' + s[i].toLowerCase();
    }
  }

  return result;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatCamelCase(input.getAttribute('name'));
  input.parentElement.append(label);

  input.setAttribute('placeholder',
  capitalizeFristLetter(formatCamelCase(input.name)));
};
