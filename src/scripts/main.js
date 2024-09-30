'use strict';

const allInput = document.querySelectorAll('form input');

allInput.forEach((input) => {
  const formatName = (inputName) => {
    return inputName.replace(/([A-Z])/g, ' $1').trim();
  };

  const formattedName = formatName(
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );

  input.placeholder = formattedName;

  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = formattedName;
  input.parentElement.insertBefore(newLabel, input);
});
