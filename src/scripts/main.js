'use strict';

// Получаем все элементы input внутри формы
const inputs = document.querySelectorAll('input');

// Для каждого элемента input создаем элемент label
inputs.forEach((input) => {
  const label = document.createElement('label');

  // Устанавливаем класс field-label для элемента label
  label.classList.add('field-label');

  // Устанавливаем атрибут for для элемента label,
  // равный id текущего элемента input
  label.setAttribute('for', input.id);

  //  Устанавливаем текст для элемента label, равный значению атрибута name
  //  текущего элемента input, с заглавной буквы
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  // Устанавливаем значение атрибута placeholder для текущего элемента input,
  // равное значению атрибута name текущего элемента input, с заглавной буквы
  input.placeholder = label.textContent;

  // Добавляем элемент label к родительскому контейнеру текущего элемента input
  input.before(label);
});
