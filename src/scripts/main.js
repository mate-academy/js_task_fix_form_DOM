'use strict';

const input = document.querySelectorAll('input');

[...input].forEach((element) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', element.id);

  const text = element.name;

  element.placeholder = text[0].toUpperCase() + text.slice(1);
  label.textContent = element.placeholder;
  element.parentElement.insertBefore(label, element);
});
