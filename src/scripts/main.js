'use strict';

const inputElements = document.querySelectorAll('input');
const inputContainers = document.querySelectorAll('.field');

const capitalize = (word) => (
  word.charAt(0).toUpperCase() + word.slice(1));

function removeCamelCasing(word, separator = ' ') {
  const camelParts = [];

  for (let letter of word) {
    if (letter === letter.toUpperCase()) {
      camelParts.push(separator);
      letter = letter.toLowerCase();
    }
    camelParts.push(letter);
  }

  return camelParts.join('');
}

function createFormLabels() {
  inputElements.forEach((inputElement, currentIndex) => {
    const label = document.createElement('label');
    const removedCamelCasing = removeCamelCasing(inputElement.name);

    label.textContent = removedCamelCasing.toUpperCase();
    label.classList.add('field-label');
    label.style.fontWeight = 'bold';
    inputElement.placeholder = capitalize(removedCamelCasing);

    label.setAttribute('for', inputElement.id);
    inputContainers[currentIndex].prepend(label);
  });
}

createFormLabels();
