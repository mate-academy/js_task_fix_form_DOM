'use strict';

// 1. Отримуємо всі inputs з усіх форм на сторінці
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  // Пропускаємо кнопки, якщо вони є інпутами (наприклад, type="submit")
  if (input.type === 'submit' || input.type === 'button') {
    return;
  }

  const inputName = input.name;
  const inputId = input.id;

  // 2. Створюємо елемент label
  const label = document.createElement('label');

  // Додаємо клас та атрибут for для зв'язку з інпутом
  label.classList.add('field-label');
  label.setAttribute('for', inputId);

  // Встановлюємо текст для мітки на основі імені інпута (у верхньому регістрі)
  label.textContent = inputName.toUpperCase();

  // 3. Встановлюємо placeholder з великої літери
  const firstLetter = inputName.charAt(0).toUpperCase();
  const restOfName = inputName.slice(1).toLowerCase();

  input.placeholder = `${firstLetter}${restOfName}`;

  // 4. Додаємо label до батьківського контейнера саме перед інпутом
  // Це важливо, щоб у структурі label був над полем введення
  input.parentElement.insertBefore(label, input);
});
