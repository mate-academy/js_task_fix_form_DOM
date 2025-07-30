'use strict';

const [...forms] = document.querySelectorAll('form');

for (const form of forms) {
  const [...inputs] = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.textContent = input.name;
    label.setAttribute('for', input.id);

    input.setAttribute(
      'placeholder',
      input.name[0].toUpperCase() + input.name.slice(1),
    );
    label.classList.add('field-label');

    const parentElement = input.parentNode;

    parentElement.insertBefore(label, input);
  });
}
