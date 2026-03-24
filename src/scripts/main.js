'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = [...form.querySelectorAll('input')];

  for (const input of inputs) {
    // For each input element create element label

    const label = document.createElement('label');

    label.className = 'field-label';

    // 1. Зв'язую через id інпуту
    label.setAttribute('for', input.id);

    // 2. Беру дані з інпуту
    const raw = input.getAttribute('name');

    // Перевіряю, що в raw є дані
    if (raw) {
      // 1. Форматую текст - перша літера велика
      const formattedText = raw.charAt(0).toUpperCase() + raw.slice(1);

      // 2. Наповнюю лейбл текстом
      label.textContent = formattedText;

      // 3. Встановлюю плейсхолдер інпуту
      input.placeholder = formattedText;

      // 4. Додаю лейбл у батьківський контейнер інпуту
      // - це покаже його на сторінці
      input.parentElement.appendChild(label);
    }
  }
}
