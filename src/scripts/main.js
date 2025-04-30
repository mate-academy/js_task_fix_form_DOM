'use strict';

// Знаходимо всі інпути всередині форм
const formInputs = document.querySelectorAll('form input');

// Перебираємо кожен інпут
formInputs.forEach((inputElement) => {
  // --- Обробка Плейсхолдера ---
  const inputName = inputElement.name;

  // Пропускаємо інпути без атрибута name
  if (!inputName) {
    return;
  }

  const placeholderText =
    inputName[0].toUpperCase() + inputName.slice(1).toLowerCase();

  inputElement.placeholder = placeholderText; // Встановлюємо плейсхолдер

  // --- Створення та Налаштування Лейбла ---
  const newLabel = document.createElement('label'); // Створюємо <label>

  newLabel.classList.add('field-label'); // Додаємо клас

  const idElement = inputElement.id; // Отримуємо id інпута

  // Встановлюємо 'for', тільки якщо у інпута є ID
  if (idElement) {
    newLabel.htmlFor = idElement; // Встановлюємо атрибут 'for'
  }
  // Якщо ID немає, атрибут 'for' просто не буде додано

  const inputNameUppercase = inputName.toUpperCase();

  newLabel.textContent = inputNameUppercase; // Встановлюємо текст лейбла

  // --- Додавання Лейбла на сторінку (перед інпутом) ---
  const parentElement = inputElement.parentElement; // Знаходимо батька

  // Вставляємо лейбл, тільки якщо батько існує
  if (parentElement) {
    parentElement.insertBefore(newLabel, inputElement);
  }
});

// Скрипт завершив роботу (без повідомлення в консоль)
