'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const formattedText = formatText(input.name);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formattedText;

  input.parentElement.insertBefore(label, input);
  input.placeholder = formattedText;
});

function formatText(str) {
  const replaced = str.replace(/-/g, ' ');
  const withSpaces = replaced.replace(/([A-Z])/g, ' $1').trim();

  return withSpaces[0].toUpperCase() + withSpaces.slice(1).toLowerCase();
}
