'use strict';

// write code here
const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const label = document.createElement('label');

    label.classList.add('field-label');

    if (!input.id) {
      input.id = input.name + '-id';
    }

    label.setAttribute('for', input.id);

    input.parentElement.prepend(label);

    const string = input.name;
    const formatted = string.replace(/([A-Z])/g, ' $1');
    const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

    label.textContent = capitalized;

    input.setAttribute('placeholder', capitalized);
  }
}
