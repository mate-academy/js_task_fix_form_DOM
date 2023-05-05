'use strict';

const input = document.querySelectorAll('input');

// пройти циклом по кожному input
for (let i = 0; i < input.length; i++) {
  // створити новий елемент label
  const label = document.createElement('label');

  // встановити клас для мітки
  label.classList.add('field-label');

  // отримати id поточного input
  const inputId = input[i].getAttribute('id');

  // встановити атрибут for для мітки
  label.setAttribute('for', inputId);

  // встановити текст для мітки
  const labelText = document.createTextNode(input[i].name);

  label.appendChild(labelText);

  // вставити мітку перед поточним input
  input[i].parentNode.insertBefore(label, input[i]);

  // всановлюєм placeholder
  input.forEach(inputs => {
    const names = inputs.name;

    // робимо першу велику літеру
    inputs.placeholder = `${names.charAt(0).toUpperCase()
       + names.substring(1)}`;
  });
}
