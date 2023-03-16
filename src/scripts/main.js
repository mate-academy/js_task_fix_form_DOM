'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const label = document.createElement('label');
  const reqTextFormat = input.name.toUpperCase().split('N').join(' N');

  label.className = 'field-label';
  label.textContent = reqTextFormat;
  label.setAttribute('for', input.id);
  input.setAttribute('placeholder', reqTextFormat);

  input.before(label);
}
