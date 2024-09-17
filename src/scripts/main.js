// 'use strict';

const inputs = document.querySelectorAll('form input');

const splitAndCapitalize = (text) => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    if (i > 0 && text[i] === text[i].toUpperCase() && text[i - 1] !== ' ') {
      result += ' ';
    }
    result += text[i];
  }

  return result
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  input.parentNode.insertBefore(label, input);
  label.textContent = input.getAttribute('name');
  input.setAttribute('placeholder', splitAndCapitalize(input.name));
});
