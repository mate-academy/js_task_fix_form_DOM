'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  const label = document.createElement('label');
  const inputName = el.getAttribute('name').split(/(?=[A-Z])/);
  let placeholderName = '';

  if (inputName.length === 1) {
    placeholderName = inputName[0][0].toUpperCase()
    + el.getAttribute('name').substring(1);
    label.textContent = el.getAttribute('name');
  } else {
    let str1 = '';
    let str2 = '';

    for (const key in inputName) {
      str1 += inputName[key][0].toUpperCase()
      + inputName[key].substring(1) + ' ';
      str2 += inputName[key].toUpperCase() + ' ';
    }

    placeholderName = str1;
    label.textContent = str2;
  }

  el.before(label);
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', el.getAttribute('id'));
  el.setAttribute('placeholder', placeholderName);
});
