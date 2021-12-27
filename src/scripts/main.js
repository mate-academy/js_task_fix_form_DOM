'use strict';

const inputs = document.querySelectorAll('input');

for (const line of inputs) {
  line.setAttribute('placeholder', line.name.toUpperCase());

  const labelForInput = document.createElement('label');

  labelForInput.setAttribute('class', 'field-label');
  labelForInput.setAttribute('for', line.id);
  labelForInput.textContent = line.name;

  line.append(labelForInput);
}
