'use strict';

const allInputs = [...document.querySelectorAll('.field-text')];

allInputs.forEach(element => {
  const label = document.createElement('label');

  label.setAttribute('class', `field-label`);
  label.setAttribute('for', element.id);
  label.textContent = splitByUpperLetter(element.name).toUpperCase();

  element.parentElement.append(label);

  element.setAttribute(`placeholder`,
    `${firstLetterToUpperCase(splitByUpperLetter(element.name))}`);

  function firstLetterToUpperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function splitByUpperLetter(string) {
    return string.replace(/([A-Z])/g, ' $1');
  }
});
