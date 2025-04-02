'use strict';

document.querySelectorAll('.field').forEach((div) => {
  const input = div.querySelector('input');

  if (!input) {
    return;
  }

  const inputName = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  input.setAttribute('placeholder', inputName);
  label.textContent = inputName;
  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  div.insertBefore(label, input);
});
