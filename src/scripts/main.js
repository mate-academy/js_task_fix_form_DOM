'use strict';
// 1. Знаходимо всі інпути у формі
const inputs = document.querySelectorAll('form input');

// 2. Проходимо циклом по кожному інпуту
inputs.forEach((input) => {
  // 1. Створюємо лейбл та додаємо клас
  const newLabel = document.createElement('label');
  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);

  // 2. Отримуємо ім'я та робимо його Capitalized
  const name = input.name;
  const capitalizedName = name[0].toUpperCase() + name.slice(1);

  // 3. Встановлюємо текст для лейбла та placeholder для інпута
  newLabel.textContent = capitalizedName;
  input.placeholder = capitalizedName;

  // 4. Додаємо лейбл у батьківський контейнер інпута
  // Ми хочемо, щоб лейбл з'явився ПЕРЕД інпутом
  input.parentElement.prepend(newLabel);
});
const name = "email"; // Наприклад, ми отримали це з input.name

// 1. Беремо першу літеру і робимо її великою
const firstLetter = name[0].toUpperCase();

// 2. Беремо решту слова (з 1-го символу до кінця)
const restOfName = name.slice(1);

// 3. З'єднуємо їх
const capitalizedName = firstLetter + restOfName;

console.log(capitalizedName); // Результат: "Email"
