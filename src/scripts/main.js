'use strict';

// 1. Знаходимо всі інпути у формі
const inputs = document.querySelectorAll('form input');

// 2. Проходимо циклом по кожному інпуту
inputs.forEach((input) => {
  // Створюємо лейбл та додаємо необхідний клас
  const newLabel = document.createElement('label');
  newLabel.classList.add('field-label');

  // Пов'язуємо лейбл з інпутом через id
  newLabel.setAttribute('for', input.id);

  // Отримуємо значення атрибута name і зберігаємо в нову змінну
  // Ми назвали її inputName, щоб уникнути конфлікту з глобальним name 🛡️
  const inputName = input.name;

  // Робимо першу літеру великою
  const capitalizedName = inputName[0].toUpperCase() + inputName.slice(1);

  // Встановлюємо текст для лейбла та підказку (placeholder) для інпута
  newLabel.textContent = capitalizedName;
  input.placeholder = capitalizedName;

  // Додаємо лейбл у контейнер перед інпутом
  input.parentElement.prepend(newLabel);
});
