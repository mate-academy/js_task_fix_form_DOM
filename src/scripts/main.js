'use strict';

const allInputs = [...document.body.querySelectorAll('input')];

for (const input of allInputs) {
  const labelElement = document.createElement('label');

  const inputNameCapitalized = (item) => {
    let updatedPlaceholder = '';

    updatedPlaceholder = item[0].toUpperCase() + item.slice(1);

    for (let i = 1; i < updatedPlaceholder.length; i++) {
      if (updatedPlaceholder[i] === updatedPlaceholder[i].toUpperCase()) {
        updatedPlaceholder = updatedPlaceholder.slice(0, i)
          + ' '
          + updatedPlaceholder.slice(i).toLowerCase();
      }
    }

    return updatedPlaceholder;
  };

  labelElement.className = 'field-label';
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = input.name.toUpperCase();
  input.setAttribute('placeholder', inputNameCapitalized(input.name));

  input.parentElement.insertAdjacentElement('afterbegin', labelElement);
};
