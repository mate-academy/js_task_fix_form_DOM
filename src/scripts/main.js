'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  /*
    RegExp ?=[A-Z] mean all characters from A to Z with positive loockahead
    matches a group after the main expression without including it in the result

    https://regexr.com/
  */
  const inputName = input.name.split(/(?=[A-Z])/).join(' ');

  input.insertAdjacentHTML(
    'beforebegin',
    `<label for="${input.id}" class="field-label">
      ${inputName}
    </label>`,
  );

  input.placeholder = `${inputName[0].toLocaleUpperCase() + inputName.slice(1).toLocaleLowerCase()}`;
});
