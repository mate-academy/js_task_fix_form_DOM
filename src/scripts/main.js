'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  const addSpaces = (theName) => {
    let withSpaces = '';

    for (let i = 0; i < theName.length; i++) {
      if (i > 0 && theName[i] === theName[i].toUpperCase()) {
        withSpaces += ' ';
      }

      withSpaces += theName[i];
    }

    return withSpaces;
  };

  inputs.forEach((input) => {
    const labelElem = document.createElement('label');

    labelElem.className = 'field-label';
    labelElem.setAttribute('for', input.id);

    labelElem.textContent = addSpaces(input.name);

    input.placeholder = addSpaces(
      input.name.charAt(0).toUpperCase() + input.name.slice(1),
    );

    input.parentNode.append(labelElem);
  });
});
