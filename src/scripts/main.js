'use strict';

// Функція sanitizeName для безпечних id
function sanitizeName(value) {
  return value.toLowerCase().trim().replace(/\W+/g, '-');
}

function textToCapitalize(text) {
  if (!text) {
    return '';
  }

  return (
    text.charAt(0).toUpperCase() +
    text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .toLowerCase()
      .slice(1)
  );
}

const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
  if (!input.name) {
    return;
  }

  if (!input.id) {
    const sanitized = sanitizeName(input.name);
    const uniqueId = `field-${sanitized}-${index}`;

    if (!document.getElementById(uniqueId)) {
      input.id = uniqueId;
    } else {
      input.id = `${uniqueId}-alt`;
    }
  }

  // Перевірка на наявність label для цього input.id
  if (document.querySelector(`label[for="${input.id}"]`)) {
    return;
  }

  const label = document.createElement('label');
  const formattedName = textToCapitalize(input.name);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = formattedName;

  if (formattedName) {
    input.placeholder = formattedName;
  }

  input.before(label);
});
