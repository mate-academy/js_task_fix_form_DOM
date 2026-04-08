'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо всі інпути форми
  const inputs = document.querySelectorAll('form input');

  // Перебираємо всі інпути
  inputs.forEach(input => {
    // Створюємо елемент label
    const label = document.createElement('label');
    label.classList.add('field-label');

    // Встановлюємо атрибут 'for' як id інпута
    label.setAttribute('for', input.id);

    // Встановлюємо текст в label, орієнтуючись на ім'я інпута
    label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    // Додаємо label перед відповідним input
    input.parentNode.insertBefore(label, input);

    // Встановлюємо placeholder для інпута
    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  });
});
