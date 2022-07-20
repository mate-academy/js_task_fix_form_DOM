'use strict';

const inputs = document.querySelectorAll('input');

const capitalizer = (word) => {
  return [...word]
    .map((char, i) => i === 0 ? char.toLocaleUpperCase() : char)
    .join('');
};

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = input.name;

  input.setAttribute('placeholder', capitalizer(input.name));

  input.parentNode.append(label);
});
