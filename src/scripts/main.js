'use strict';

const element = document.querySelectorAll('form input');

// контейнер для додавання елементу масиву
let container = document.getElementById('container');

// перевіряю чи існує контейнер,якщо не знайдено створюю його
if (!container) {
  container = document.createElement('div');
  container.id = 'container';

}

// створюю елемент
element.forEach((input, index) => {
  // Унікальний Id для інпута
  const inputId = `input-${index}`;

  input.setAttribute('id', inputId);

  // стоврюю лейбл
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputId);
  label.textContent = input.name;

  // усі літери великі
  const formateName = input.name.toUpperCase();

  label.textContent = formateName;
  input.parentNode.insertBefore(label, input);

  //доадаю placeholder до інпута
  input.setAttribute('placeholder', formateName);


  // додаю лейбл до батьківського елмента інпут
  input.parentNode.insertBefore(label, input);
});

