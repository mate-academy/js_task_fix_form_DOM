'use strict';

const inputs = document.querySelectorAll('input');

function placeholderText(text) {
  let res = text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      res += ' ';
      res += text[i].toLowerCase();
      continue;
    }

    res += text[i];
  };

  return res;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.placeholder = placeholderText(input.name);

  input.parentElement.append(label);
}
