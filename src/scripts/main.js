'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const labelForInput = document.createElement('label');

  labelForInput.setAttribute('class', 'field-label');
  labelForInput.setAttribute('for', `${input.id}`);
  labelForInput.textContent = `${input.name}`;

  input.parentElement.append(labelForInput);

  const inputName = input.name[0].toLocaleUpperCase() + input.name.slice(1);

  input.placeholder = `${inputName}`;
});
