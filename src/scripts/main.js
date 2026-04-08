'use strict';

// write code here

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.setAttribute('placeholder', labelText);

  input.parentElement.append(label);
});
