'use strict';

const inputs = document.querySelectorAll('input');

function capitalizedText(att) {
  const capitilized = att.charAt(0).toUpperCase()
    + att.slice(1);

  return capitilized.split('t').join('t ');
}

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalizedText(input.name);
  input.parentElement.append(label);

  input.setAttribute('placeholder', capitalizedText(input.name));
});
