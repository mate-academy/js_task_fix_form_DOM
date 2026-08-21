'use strict';

function capitalize(str) {
  const withSpaces = str.replace(/([A-Z])/g, ' $1');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

function addLabelsAndPlaceholders() {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const inputName = input.name;
      const readableName = capitalize(inputName);

      input.placeholder = readableName;

      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = readableName;

      input.parentElement.appendChild(label);
    });
  });
}

addLabelsAndPlaceholders();
