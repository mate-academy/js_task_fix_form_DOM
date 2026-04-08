'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const container = input.parentNode;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const formattedText = input.name.replace(/([A-Z])/g, ' $1').trim();
  const upperCase = formattedText[0].toUpperCase() + formattedText.slice(1);

  label.textContent = upperCase;

  input.placeholder = upperCase;

  container.prepend(label);
});
