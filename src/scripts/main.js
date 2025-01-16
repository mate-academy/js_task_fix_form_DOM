'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const label = document.createElement('label');

    label.setAttribute('for', input.id);

    const nameContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    label.textContent = nameContent;

    input.insertAdjacentElement('beforebegin', label);

    input.setAttribute('placeholder', nameContent);
  }
}
