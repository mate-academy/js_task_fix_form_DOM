'use strict';

// 1. Отримуємо всі input на сторінці
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  // 2. Створюємо label
  const label = document.createElement('label');

  label.classList.add('field-label');

  // 3. Прив'язуємо label до input
  label.setAttribute('for', input.id);

  // 4. Беремо name інпута та робимо текст для label
  const inputName = input.name;

  label.textContent = inputName;

  // 5. Створюємо placeholder (з великої літери)
  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  // 6. Додаємо label в контейнер поля
  input.parentElement.appendChild(label);
});
