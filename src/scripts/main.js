'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = element.id;
  label.textContent = element.name.toUpperCase();
  element.parentNode.insertBefore(label, element);
});

inputs.forEach((input) => {
  input.setAttribute(
    'placeholder',
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );
});
