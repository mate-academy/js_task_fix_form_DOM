'use strict';

// write code here
const labels = document.querySelectorAll('input');

labels.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const text = input.name.toUpperCase();

  label.textContent = text;

  const res = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', res);

  input.parentNode.insertBefore(label, input);
});
