'use strict';

function createTextForLabel(text) {
  if (text.includes('Name')) {
    return text
      .replace(/([A-Z])/, ' $1') // вставляємо один пробіл
      .replace(/^./, (c) => c.toUpperCase()) // перша літера велика
      .replace(/ ([A-Z])/, (_, c) => ' ' + c.toLowerCase()) // друга — мала
      .trim();
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form ? form.querySelectorAll('input') : [];

  inputs.forEach((id) => {
    const textLabel = createTextForLabel(id.name);
    const input = document.getElementById(id.id);

    if (input) {
      input.setAttribute('placeholder', textLabel);

      const field = input.parentElement;
      const newLabel = document.createElement('label');

      newLabel.setAttribute('for', id.id);
      newLabel.className = 'field-label';
      newLabel.textContent = textLabel;
      field.insertBefore(newLabel, input);
    }
  });
});
