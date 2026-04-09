'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const fields = form.children;

  for (const field of fields) {
    if (!field.classList.contains('field')) {
      continue;
    }

    const inputElement = field.firstElementChild;
    const inputName = inputElement.getAttribute('name');
    const inputNameWithNoHyphens = inputName.replaceAll('-', ' ')
    const inputPlaceholder =
      inputNameWithNoHyphens.slice(0, 1).toUpperCase() + inputNameWithNoHyphens.slice(1).toLowerCase();
    const inputIdentifier = inputElement.id;

    inputElement.setAttribute('placeholder', inputPlaceholder);

    const labelElement = document.createElement('label');

    field.prepend(labelElement);

    labelElement.setAttribute('class', 'field-label');
    labelElement.setAttribute('for', inputIdentifier);
    labelElement.textContent = inputName;
  }
}
