'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.htmlFor = input.id;
    label.textContent = input.name;

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentNode.insertBefore(label, input);
  }
});
