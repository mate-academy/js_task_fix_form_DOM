'use strict';

function formatText(str) {
  let formatted = '';
  formatted += str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      formatted += ' ';
    }
    formatted += str[i];
  }
  return formatted;
}

const forms = document.querySelectorAll('form');
forms.forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const formattedName = formatText(input.name);
    const label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.textContent = formattedName;
    label.classList.add('field-label');

    input.before(label);
    input.setAttribute('placeholder', formattedName);
  })
});

