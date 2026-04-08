'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input:not([type="submit"])');

  inputs.forEach((elem) => {
    if (!elem.id) {
      elem.id = elem.name || elem.type;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.htmlFor = elem.id;
    elem.insertAdjacentElement('beforebegin', label);

    const labelText = normalizeName(elem.name);

    label.textContent = labelText;
    elem.placeholder = labelText;
  });
});

function normalizeName(text) {
  if (text.length === 0) {
    return '';
  }

  return text
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
