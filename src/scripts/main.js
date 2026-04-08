'use strict';

const inputArray = document.querySelectorAll('input');

inputArray.forEach((input) => {
  input.setAttribute('placeholder', input.name);

  const label = document.createElement('label');

  label.className = 'field-label';

  label.innerText = input.name;
  input.parentElement.insertBefore(label, input);
});
