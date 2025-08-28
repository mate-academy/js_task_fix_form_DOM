'use strict';

function initLabelsAndPlaceholders() {
  const form = document.querySelector('form');

  if (!form) {
    return;
  }

  const inputs = form.querySelectorAll('input');
  const skipTypes = new Set(['submit', 'button', 'reset', 'hidden', 'image']);

  inputs.forEach((input, index) => {
    // Пропускаємо кнопки/скриті поля
    if (skipTypes.has((input.type || '').toLowerCase())) {
      return;
    }

    // Використовуємо input.name для формування тексту (вимога задачі)
    const inputName = input.name ? input.name.trim() : '';

    if (!inputName) {
      // Якщо name відсутній або порожній — пропускаємо цей input
      return;
    }

    // Якщо id відсутній — створюємо осмислений id (але не змінюємо існуючий)
    if (!input.id) {
      const safeId = inputName
        .replace(/\s+/g, '-') // пробіли -> дефіси
        .replace(/[_]+/g, '-') // підкреслення -> дефіси
        .replace(/[^a-zA-Z0-9-]/g, '') // видалити недопустимі символи
        .toLowerCase();

      input.id = safeId || `input-${index}`;
    }

    const labelText = inputName
      .replace(/[-_]+/g, ' ')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim();
    const humanText = labelText.charAt(0).toUpperCase() + labelText.slice(1);

    const existingLabel = form.querySelector('label[for="' + input.id + '"]');

    if (!existingLabel) {
      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = humanText;

      const parentNode = input.parentNode;

      if (parentNode) {
        parentNode.insertBefore(label, input);
      }
    }

    // Завжди ставимо placeholder, він створюється з input.name
    input.setAttribute('placeholder', humanText);
  });
}

// Запуск після завантаження DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLabelsAndPlaceholders);
} else {
  initLabelsAndPlaceholders();
}
