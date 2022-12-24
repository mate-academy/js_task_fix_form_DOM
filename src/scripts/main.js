'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.forEach(field => {
  const inputElement = field.querySelector('input');
  const { id: inputID, name: inputName } = inputElement;

  field.insertAdjacentHTML('afterbegin', `
    <label class="field-label" for="${inputID}">
      ${capitalized(inputName)}
    </label>
  `);

  inputElement.placeholder = capitalized(inputName);
});

function capitalized(str) {
  switch (str) {
    case 'firstName': {
      return 'First Name';
    }

    case 'lastName': {
      return 'Last Name';
    }
  };

  return str.charAt(0).toUpperCase() + str.slice(1);
};
