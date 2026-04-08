'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;
  const id = input.id;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', id);

  const formattedName = formatLabel(inputName);

  label.textContent = formattedName;
  input.placeholder = formattedName;

  const parentElement = input.parentElement;

  parentElement.prepend(label);
});

function formatLabel(text) {
  const words = text.split(/(?=[A-Z])/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  return capitalizedWords.join(' ');
}
