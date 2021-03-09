'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  function addSpaces(string) {
    const splittedName = string.split('');

    for (let i = 0; i < splittedName.length; i++) {
      if (splittedName[i] === splittedName[i].toUpperCase()) {
        splittedName[i] = ` ${splittedName[i]}`;
      }
    }

    return splittedName.join('');
  }

  input.placeholder = addSpaces(input.name)[0].toUpperCase()
  + addSpaces(input.name).slice(1);

  input.parentElement.append(label);
});
