'use strict';
// 1. Знаходимо всі інпути у формі
const inputs = document.querySelectorAll('form input');

// 2. Проходимо циклом по кожному інпуту
inputs.forEach((input) => {
  const newLabel = document.createElement('label');
  newLabel.classList.add('field-label');

  // Пов'язуємо лейбл з інпутом через id
  newLabel.setAttribute('for', input.id);

  // Отримуємо ім'я інпуту (наприклад, "email" або "password")
  const name = input.name;

  // Робимо першу літеру великою (Capitalize)
  // Ми робимо це тут, щоб логіка спрацювала для КОЖНОГО поля
  const capitalizedName = name[0].toUpperCase() + name.slice(1);

  // Встановлюємо текст для лейбла та підказку (placeholder) для інпута
  newLabel.textContent = capitalizedName;
  input.placeholder = capitalizedName;

  // Додаємо лейбл у контейнер ПЕРЕД інпутом
  input.parentElement.prepend(newLabel);
});
