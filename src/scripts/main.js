'use strict';

const form = document.querySelector('form');
const inputs = [...form.querySelectorAll('input')];

function formatText(phrase) {
  let result = '';

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i];

    if (i === 0) {
      result += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      result += ' ' + char;
    } else {
      result += char;
    }
  }

  return result;
}

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatText(input.name);

  input.parentNode.insertBefore(label, input);

  const placeholderText = formatText(input.name);

  input.setAttribute('placeholder', placeholderText);
});
