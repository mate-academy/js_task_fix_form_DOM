'use strict';

// write code here
const inputs = document.querySelectorAll('input');

const inputsAsArray = Array.from(inputs);

inputsAsArray.forEach(entry => {
  const label = document.createElement('label');

  const placeHolder = entry.name.charAt(0).toLocaleUpperCase()
  + entry.name.toLocaleLowerCase().slice(1);

  entry.placeholder = placeHolder;

  label.classList.add(`field-label`);

  label.setAttribute('for', entry.id);

  label.insertAdjacentText('afterbegin', entry.name);

  entry.before(label);
});
