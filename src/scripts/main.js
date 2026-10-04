'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', element.getAttribute('id'));
  label.textContent = element.getAttribute('name');

  element.parentElement.prepend(label);
});

inputs.forEach((element) => {
  const placeholder = element.getAttribute('name');
  const placeholderFormatted =
    placeholder[0].toUpperCase() + placeholder.slice(1);

  element.setAttribute('placeholder', placeholderFormatted);
});
