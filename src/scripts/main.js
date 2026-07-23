'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const placeholder = input.name.toUpperCase();

    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = placeholder;

    input.placeholder = placeholder;
    input.parentElement.append(label);
  }
});
