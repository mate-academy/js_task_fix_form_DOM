'use strict';

const list = document.querySelectorAll('input');

for (const input of list) {
  const label = document.createElement('label');
  const normalizedText = input.name.toUpperCase().split('N').join(' N');

  label.className = 'field-label';
  label.textContent = normalizedText;
  label.setAttribute('for', input.id);
  input.setAttribute('placeholder', normalizedText);

  input.before(label);
}
