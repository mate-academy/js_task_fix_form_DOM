'use strict';

const inputs = document.querySelectorAll('.field > input');

inputs.forEach(item => {
  const parsedName = capitalize(item.name);

  item.setAttribute('placeholder', parsedName);

  const label = document.createElement('label');

  label.setAttribute('for', item.id);
  label.textContent = parsedName;
  label.classList.add('field-label');

  item.closest('div.field').prepend(label);
});

function capitalize(str = '') {
  if (!str || typeof str !== 'string') {
    return;
  }

  if (str === str.toLowerCase()) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  const format = str.split('');

  format[0] = format[0].toUpperCase();

  return format.reduce((text, char) => {
    return char === char.toUpperCase()
      ? text + ' ' + char
      : text + char;
  });
}
