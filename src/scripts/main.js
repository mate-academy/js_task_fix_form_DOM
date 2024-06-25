'use strict';

const fields = document.getElementsByClassName('field');

const stringHumanizer = (inputString) => {
  const sizing = [0];
  const result = [];

  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === inputString[i].toUpperCase()) {
      sizing.push(i);
    }
  }

  for (let i = 0; i < sizing.length; i++) {
    result.push(inputString.slice(sizing[i], sizing[i + 1]));
  }

  return result.join(' ');
};

for (const field of fields) {
  const label = document.createElement('label');

  const input = field.querySelector('input');

  let attributeName = input.getAttribute('name');

  if (attributeName !== attributeName.toLowerCase()) {
    attributeName = stringHumanizer(attributeName);
  }
  label.textContent = attributeName.toUpperCase();
  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  input.setAttribute(
    'placeholder',
    `${attributeName.slice(0, 1).toUpperCase()}${attributeName.slice(1)}`,
  );

  field.insertBefore(label, input);
}
