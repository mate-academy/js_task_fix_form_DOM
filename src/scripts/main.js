'use strict';

const inputList = Array.from(document.querySelectorAll('form input'));

for (const input of inputList) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  label.textContent = input.name;
  input.setAttribute('placeholder', input.name);

  input.before(label);
}

const style = document.createElement('style');

style.textContent = `
  input::placeholder {
    text-transform: upperCase;
  }
`;

// Додаємо стиль у <head>
document.head.appendChild(style);
