'use strict';

const allInput = [...document.querySelectorAll('form input')];

allInput.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (el.id) {
    label.setAttribute('for', el.id);
  }

  const fieldName = formatFiledName(el.name);

  label.textContent = fieldName;
  el.placeholder = fieldName;

  el.parentNode.insertBefore(label, el);
});

function formatFiledName(str) {
  const withSpaces = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}
