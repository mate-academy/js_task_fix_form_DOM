'use strict';

// Отримуємо всі інпути
const getAllInputs = document.querySelectorAll('input');

// eslint-disable-next-line no-unused-vars
const parentElement = document.querySelector('form');

getAllInputs.forEach((item, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', item.id);

  // Встановлення тексту мітки за допомогою switch
  switch (index) {
    case 0:
      label.textContent = 'Name';
      item.placeholder = 'Name';
      break;
    case 1:
      label.textContent = 'Last Name';
      item.placeholder = ' Last Name';
      break;
    case 2:
      label.textContent = 'Email';
      item.placeholder = 'Email';
      break;
    case 3:
      label.textContent = 'Password';
      item.placeholder = 'Password';
      break;
    case 4:
      label.textContent = 'Email';
      item.placeholder = 'Email';
      break;
    case 5:
      label.textContent = 'Password';
      item.placeholder = 'Password';
      break;
    default:
      label.textContent = 'Other';
  }
  // Додаємо мітку перед інпутом
  item.parentNode.insertBefore(label, item);

  document.body.appendChild(label);
});
