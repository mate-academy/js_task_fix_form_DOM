'use strict';

document.querySelectorAll('form input').forEach(input => {
  // Створюємо елемент `label`
  const label = document.createElement('label');
  
  label.classList.add('field-label');

  // Встановлюємо атрибут `for` з ідентифікатором `input`
  if (!input.id) {
    input.id = input.name || `input-${Math.random().toString(36).substr(2, 9)}`;
  }
  label.setAttribute('for', input.id);

  // Встановлюємо текст для `label` на основі `input` `name`
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  // Встановлюємо `placeholder` для `input`, капіталізуючи його ім'я
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  // Додаємо `label` до батьківського контейнера `input`
  input.parentNode.insertBefore(label, input);
});


