'use strict';

function camelCaseConvert(string) {
  return string.replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
}

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const fieldsInput = form.querySelectorAll('.field-text');

  for (const fieldInput of fieldsInput) {
    fieldInput.placeholder = camelCaseConvert(fieldInput.name);

    const elementHTML = `
      <label class="field-label" for=${fieldInput.id}>
        ${camelCaseConvert(fieldInput.name)}
      </label>
    `;

    fieldInput.insertAdjacentHTML('afterend', elementHTML);
  }
}
