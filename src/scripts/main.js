'use strict';

const allInput = document.querySelectorAll('input');

function correctName(text) {
  let newText = '';

  for (let i = 0; i < text.length; i++) {
    i === 0 ? newText += text[i].toUpperCase()
      : text[i].charCodeAt(0) !== text[i].toUpperCase().charCodeAt(0)
        ? newText += text[i] : newText += ` ${text[i].toLowerCase()}`;
  }

  return newText;
}

for (const input of [...allInput]) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = input.id;
  label.textContent = correctName(input.name).toUpperCase();
  input.placeholder = correctName(input.name);
  input.parentElement.append(label);
}
