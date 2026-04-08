'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(word) {
  return (
    word[0].toUpperCase() +
    word
      .slice(1)
      .split(/(?=[A-Z])/g)
      .join(' ')
  );
}

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalize(input.name);
  input.placeholder = capitalize(input.name);
  input.before(label);
});
