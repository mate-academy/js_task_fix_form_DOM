'use strict';

const inputs = document.querySelectorAll('.field-text');

function addLabel(elements) {
  elements.forEach(element => {
    const inputLabel = document.createElement('label');

    element.before(inputLabel);

    inputLabel.classList = 'field-label';
    inputLabel.setAttribute('for', element.id);
    inputLabel.textContent = element.name;
  });
};

function addPlaceholder(element) {
  function capitalizeName(names) {
    return (names.charAt(0).toUpperCase()
      + names.slice(1).replace((/(?=[A-Z])/g), ' '));
  };

  return element.forEach((input) => {
    input.placeholder = capitalizeName(input.name);
  });
};

addLabel(inputs);
addPlaceholder(inputs);
