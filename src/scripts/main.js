'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  const splittedName = input.name.split('');

  for (let i = 0; i < splittedName.length; i++) {
    if (splittedName[i] === splittedName[i].toUpperCase()) {
      splittedName[i] = ` ${splittedName[i]}`;
    }
  }

  const joinedName = splittedName.join('');

  input.placeholder = joinedName[0].toUpperCase() + joinedName.slice(1);

  input.parentElement.append(label);
});
