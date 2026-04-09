'use strict';

const inputs = document.querySelectorAll('input');

for (const element of inputs) {
  const idElement = element.getAttribute('id');
  const nameElement = element.getAttribute('name');
  const capitalizeName = capitalizeFirstLetter(nameElement);
  const labelInInput = document.createElement('label');

  labelInInput.classList.add('field-label');
  labelInInput.setAttribute('for', idElement);
  labelInInput.textContent = nameElement.toUpperCase();

  element.setAttribute('placeholder', capitalizeName);
  element.insertAdjacentElement('beforebegin', labelInInput);
}

function capitalizeFirstLetter(word) {
  if (!word) {
    return '';
  }

  return word[0].toUpperCase() + word.slice(1);
}
