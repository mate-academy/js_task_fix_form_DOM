'use strict';

// Функція приймає масив та створює <label> з атрибутів в input
function fixerHTML(array) {
  array.forEach((input) => {
    const inputName = input.name;
    const id = input.id;

    // Створюємо обʼєкт label та додаємо в нього потрібні властивості
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', id);
    label.textContent = inputName;

    // Використовуємо функцію Capitalizer
    input.placeholder = capitalizer(inputName);

    /*
    parentNode знаходить батьківський елемент
    insertBefore вставляє вузол в батьківський елемент
    перед вказаним вузлом
  */
    input.parentNode.insertBefore(label, input);
  });
}

// Фукнція приймає строку та робить великою першу літеру
function capitalizer(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Знаходимо всі input'и в html
const allInputs = document.querySelectorAll('form input');

// Викликаємо функцію
fixerHTML(allInputs);
