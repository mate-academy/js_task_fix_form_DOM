'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const inputName = input.getAttribute('name');

      if (!inputName) {
        return;
      }

      // Розбиваємо camelCase → "firstName" => "First Name"
      const words = inputName.replace(/([A-Z])/g, ' $1').trim();
      const placeholder = words.charAt(0).toUpperCase() + words.slice(1);
      // Перша літера велика, далі як є

      // Створюємо label
      const label = document.createElement('label');

      label.classList.add('field-label');

      // Якщо id немає — створюємо з name (замінюючи пробіли на -)
      if (!input.id) {
        input.id = inputName.replace(/\s+/g, '-').toLowerCase();
      }
      label.setAttribute('for', input.id);
      label.textContent = placeholder; // Текст як у плейсхолдері

      // Додаємо placeholder
      input.setAttribute('placeholder', placeholder);

      // Апендимо label у контейнер (div.field)
      input.parentNode.appendChild(label);
    });
  });
});
