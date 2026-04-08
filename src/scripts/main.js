'use strict';

const inputs = [...document.querySelectorAll('input')];

function normalizeText(text) {
  let normalized = text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      normalized += ' ';
    }

    normalized += text[i].toLowerCase();
  }

  return normalized;
}

inputs.forEach(input => {
  input.placeholder = normalizeText(input.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerText = normalizeText(input.name).toUpperCase();

  input.before(label);
});
