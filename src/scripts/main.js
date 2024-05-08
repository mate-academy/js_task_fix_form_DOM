'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(str) {
  return (
    str.charAt(0).toUpperCase() +
    str
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(' ')
  );
}

inputs.map((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.split(/(?=[A-Z])/).join(' ');
  input.insertAdjacentElement('beforebegin', label);
  input.placeholder = capitalize(input.name);
});
