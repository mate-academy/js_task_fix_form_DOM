'use strict';

// Отримуємо всі інпути
const getAllInputs = document.querySelectorAll('input');

getAllInputs.forEach((item, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  // Generate unique ID for each input if not already set
  if (!item.id) {
    item.id = `input-${index}`;
  }
  label.setAttribute('for', item.id);

  switch (index) {
    case 0:
      label.textContent = 'Name';
      item.placeholder = 'Name';
      break;
    case 1:
      label.textContent = 'Last Name';
      item.placeholder = 'Last Name';
      break;
    case 2:
      label.textContent = 'Email';
      item.placeholder = 'Email';
      item.type = 'email';
      break;
    case 3:
      label.textContent = 'Password';
      item.placeholder = 'Password';
      item.type = 'password';
      break;
    default:
      label.textContent = `Field ${index + 1}`;
      item.placeholder = `Field ${index + 1}`;
  }

  // Додаємо мітку перед інпутом
  item.parentNode.insertBefore(label, item);
});
