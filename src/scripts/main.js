'use strict';

(function () {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input, index) => {
    // ЗАМІСТЬ: const name = input.name;
    // ПИШЕМО:
    const inputName = input.name;

    if (!inputName) {
      return;
    }

    // Оновлюємо посилання на нову назву змінної всюди нижче
    const capitalizedName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);

    if (!input.id) {
      input.id = `${inputName}-${index}`;
    }

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = capitalizedName;
    input.placeholder = capitalizedName;

    input.parentNode.appendChild(label);
  });
})();
