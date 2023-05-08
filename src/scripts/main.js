'use strict';

const formInputs = document.querySelectorAll('input');

[...formInputs].forEach(input => {
  const formLable = document.createElement('label');

  input.placeholder = toFormatText(input.name);
  formLable.className = 'field-label';
  formLable.htmlFor = input.id;
  formLable.textContent = toFormatText(input.name);
  input.parentElement.append(formLable);
});

function toFormatText(text) {
  return text[0].toUpperCase()
    + text
      .slice(1)
      .split('N')
      .join(' N');
}
