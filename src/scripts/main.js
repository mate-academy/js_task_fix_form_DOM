'use strict';

const input = document.querySelectorAll('input');

for (const elem of [...input]) {
  elem.placeholder = elem.name;
  elem.placeholder[0].toUpperCase();

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = elem.name;
  label.setAttribute('for', elem.id);

  elem.parentElement.append(label);
}
