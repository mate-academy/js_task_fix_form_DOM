'use strict';

const formInputs = document.querySelectorAll('input');
const inputWrappers = document.querySelectorAll('.field');

formInputs.forEach((element, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = element.id;
  label.textContent = element.name;
  inputWrappers[index].append(label);

  const placeholder = capitalize(splitByUpperChar(element.name));

  element.placeholder = placeholder;
});

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function splitByUpperChar(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
