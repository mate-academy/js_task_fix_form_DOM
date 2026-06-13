'use strict';

const formInputs = document.querySelectorAll('form input');

function capitalize(text) {
  if (!text) {
    return '';
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

formInputs.forEach((input) => {
  const nameValue = input.name;
  const formattedText = capitalize(nameValue);

  input.placeholder = formattedText;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formattedText;

  input.parentElement.prepend(label);
});
