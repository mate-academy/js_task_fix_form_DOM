'use strict';

const inputs = document.querySelectorAll('form input');

function capitalizeFirstLetter(text) {
  if (!text) {
    return '';
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  // Встановлюємо placeholder
  if (inputName) {
    const placeholder = capitalizeFirstLetter(inputName);

    input.setAttribute('placeholder', placeholder);
  }

  // Створюємо label, якщо є id і name
  if (inputId && inputName) {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', inputId);
    label.textContent = capitalizeFirstLetter(inputName);

    input.parentElement.appendChild(label);
  }
}
