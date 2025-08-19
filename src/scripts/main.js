'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const fieldName = input.getAttribute('name');

    if (!fieldName) {
      return;
    } // пропускаємо інпути без name

    // 1. Додаємо id інпуту (якщо немає)
    if (!input.id) {
      input.id = fieldName;
    }

    // 2. Створюємо label
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    // Текст для label: з великої літери
    label.textContent = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

    // 3. Додаємо label перед input
    input.parentNode.insertBefore(label, input);

    // 4. Додаємо placeholder (якщо немає)
    if (!input.placeholder) {
      input.placeholder =
        fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    }
  });
});
