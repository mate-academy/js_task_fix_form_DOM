'use strict';

// Отримуємо всі інпути на сторінці
const inputs = document.querySelectorAll('input');

// Перебираємо кожен елемент input
inputs.forEach((input) => {
  // Створюємо елемент label
  const label = document.createElement('label');

  // Додаємо клас для стилів
  label.classList.add('field-label');

  // Встановлюємо атрибут for, який має співпадати з id елемента input
  label.setAttribute('for', input.id);

  // Встановлюємо текст label на основі атрибута name
  const labelText =
    input.name.charAt(0).toUpperCase() +
    input.name.slice(1).replace(/([A-Z])/g, ' $1');

  label.textContent = labelText;

  // Додаємо placeholder до input
  input.setAttribute('placeholder', labelText);

  // Додаємо label перед відповідним input
  input.parentElement.insertBefore(label, input);
});
