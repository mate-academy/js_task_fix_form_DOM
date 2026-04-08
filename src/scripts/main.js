'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  label.htmlFor = input.id;
  label.className = 'field-label';
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = label.textContent; // Додаємо placeholder

  input.parentNode.insertBefore(label, input); // Вставляємо перед input
});
