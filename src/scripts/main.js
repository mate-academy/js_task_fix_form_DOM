'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const inputName = input.getAttribute('name'); // <--- renamed

    if (!inputName) {
      return;
    }

    const words = inputName.replace(/([A-Z])/g, '$1').trim();
    const placeholder =
      words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();

    const label = document.createElement('label');

    label.classList.add('field-label');

    // Якщо інпуту немає id — задаємо один (щоб label[for] працював)
    if (!input.id) {
      input.id = inputName;
    }
    label.setAttribute('for', input.id);
    label.textContent = words.toUpperCase();

    input.setAttribute('placeholder', placeholder);

    input.parentNode.insertBefore(label, input);
  });
});
