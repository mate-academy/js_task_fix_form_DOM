'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  let inputName = input.name;

  for (let i = 0; i < inputName.length; i++) {
    const lowerName = inputName.toLocaleLowerCase();

    if (inputName[i] !== lowerName[i]) {
      const adaptedPhrase = inputName.substring(0, i) + ' '
        + inputName.slice(i);

      inputName = adaptedPhrase;
      i = i + 1;
    }
  }

  input.placeholder = inputName[0].toLocaleUpperCase() + inputName.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = inputName;
  input.before(label);
});
