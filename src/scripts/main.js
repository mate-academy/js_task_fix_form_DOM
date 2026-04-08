'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const upperCharName = input.name[0].toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.setAttribute('placeholder', upperCharName);

  input.parentElement.insertBefore(label, input);
});
