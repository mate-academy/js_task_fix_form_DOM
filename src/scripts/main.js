'use strict';

const inputs = document.querySelectorAll('input');

for (const item of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = convert(item.name).toUpperCase();
  item.placeholder = convert(item.name);

  item.parentElement.append(label);
}

function convert(text) {
  let result = text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result += ' ' + text[i].toLowerCase();
    } else {
      result += text[i];
    }
  }

  return result;
}
