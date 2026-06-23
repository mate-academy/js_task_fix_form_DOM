'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    input.parentElement.insertAdjacentHTML(
      'afterbegin',
      `<label class="field-label" for="${input.id}">
        ${input.name}
      </label>`,
    );

    const placeholder = input.name[0].toUpperCase() + input.name.slice(1);

    input.placeholder = placeholder;
  }
}
