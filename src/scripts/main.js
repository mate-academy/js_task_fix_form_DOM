'use strict';

const allInputs = [...document.body.querySelectorAll('input')];

for (const input of allInputs) {
  const labelElement = document.createElement('label');

  const updateStrings = (item) => {
    let updatedString = '';

    updatedString = item[0].toUpperCase() + item.slice(1);

    for (let i = 1; i < updatedString.length; i++) {
      if (updatedString[i] === updatedString[i].toUpperCase()) {
        updatedString = updatedString.slice(0, i)
          + ' '
          + updatedString.slice(i).toLowerCase();
      }
    }

    return updatedString;
  };

  labelElement.className = 'field-label';
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = updateStrings(input.name).toUpperCase();
  input.setAttribute('placeholder', updateStrings(input.name));

  input.parentElement.insertAdjacentElement('afterbegin', labelElement);
};
