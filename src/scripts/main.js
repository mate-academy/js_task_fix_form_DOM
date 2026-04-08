'use strict';

const fieldText = document.querySelectorAll('.field-text');

function splitCamelCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
}

function capitalizeFirstLetter(string) {
  const toLow = string.toLowerCase();

  return toLow.charAt(0).toUpperCase() + toLow.slice(1);
}

function addLabel(list) {
  const LABEL_CLASS = 'field-label';

  Array.from(list).forEach((element) => {
    const lab = document.createElement('label');

    lab.className = LABEL_CLASS;
    lab.textContent = splitCamelCase(element.name);

    element.before(lab);
  });
}

function addPlaceholder(list) {
  Array.from(list).forEach((elem) => {
    elem.setAttribute(
      'placeholder',
      `${capitalizeFirstLetter(splitCamelCase(elem.name))}`,
    );
  });
}

addLabel(fieldText);

addPlaceholder(fieldText);
