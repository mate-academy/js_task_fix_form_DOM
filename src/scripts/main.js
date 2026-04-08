'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  if (!forms.length) {
    return;
  }

  const toPlaceholder = (raw) => {
    if (!raw) {
      return '';
    }

    const first = raw.charAt(0).toUpperCase();

    return first + raw.slice(1);
  };

  forms.forEach((formEl, formIndex) => {
    const inputs = formEl.querySelectorAll('input[name]');

    inputs.forEach((input, inputIndex) => {
      const inputName = input.name;

      if (!inputName) {
        return;
      }

      if (!input.id) {
        input.id = `${inputName}-${formIndex}-${inputIndex}`;
      }

      const parentInput = input.parentElement;

      if (!parentInput) {
        return;
      }

      // 3️⃣ перевіряємо, чи існує мітка
      let label = parentInput.querySelector(`label[for="${input.id}"]`);

      if (!label) {
        label = document.createElement('label');
        label.classList.add('field-label');
        label.htmlFor = input.id;
        label.textContent = input.name;

        parentInput.insertBefore(label, input);
      }

      if (!input.hasAttribute('placeholder')) {
        input.placeholder = toPlaceholder(inputName);
      }
    });
  });
});
