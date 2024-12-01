'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const capitalizeName = capitalize(input.name);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  input.setAttribute('placeholder', capitalizeName);
  label.textContent = capitalizeName;

  input.parentNode.prepend(label);
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
