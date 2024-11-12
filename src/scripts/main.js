'use strict';

const inputs = document.querySelectorAll('input');

const formatText = (text, toUpperCase = false) => {
  let result = text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result += ' ' + text[i];
    } else {
      result += text[i];
    }
  }

  return toUpperCase ? result.toUpperCase() : result;
};

inputs.forEach((input) => {
  const label = document.createElement('label');
  const formattedName = input.name;

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = formatText(formattedName, true);

  input.setAttribute('placeholder', formatText(formattedName));
  input.parentElement.appendChild(label);
});
