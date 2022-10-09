'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const inputLabel = document.createElement('label');

  inputLabel.className = 'field-label';

  let secondWordBegin = 0;

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      secondWordBegin = i;
    }
  };

  inputLabel.textContent
   = (secondWordBegin === 0)
      ? input.name
      : input.name.slice(0, secondWordBegin) + ' '
       + input.name.slice(secondWordBegin);

  inputLabel.htmlFor = input.id;

  input.before(inputLabel);

  input.placeholder
   = (secondWordBegin === 0)
      ? input.name[0].toUpperCase() + input.name.slice(1)
      : input.name[0].toUpperCase() + input.name.slice(1, secondWordBegin) + ' '
    + input.name.slice(secondWordBegin);
}
