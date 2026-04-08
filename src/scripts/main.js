'use strict';

// write code here

document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо всі елементи input у формі

  const inputs = document.querySelectorAll('.field-text');

  inputs.forEach((input) => {
    // Отримуємо ім'я input, яке буде вискористано для label і placeholder
    const inputName = input.name;

    if (inputName) {
      // Створюємо елемент label з класом field-label
      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', input.id);

      label.textContent =
        inputName.charAt(0).toUpperCase() + inputName.slice(1);

      // додаємо plaveholder для input

      input.placeholder =
        inputName.charAt(0).toUpperCase() + inputName.slice(1);

      // Додаємо label перед input
      input.parentNode.insertBefore(label, input);
    }
  });
});
