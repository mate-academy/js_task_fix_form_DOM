'use strict';

const allInput = document.querySelectorAll('form input');

allInput.forEach((input) => {
  const formatPlaceholder = (inputName) => {
    return inputName.replace(/([A-Z])/g, ' $1').trim();
  };

  input.placeholder = formatPlaceholder(
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );

  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = input.name;
  input.parentElement.insertBefore(newLabel, input);
});
