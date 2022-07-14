'use strict';

const inputs = [...document.querySelectorAll('form input')];

function getSliceStr(str) {
  let result = '';

  for (const elem of str) {
    if (elem.toUpperCase() !== elem) {
      result += elem;
    } else {
      result += ` ${elem}`;
    }
  }

  return result[0].toUpperCase() + result.slice(1);
}

for (const elem of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = elem.id;
  label.textContent = getSliceStr(elem.name);
  elem.parentElement.prepend(label);
}

for (const elem of inputs) {
  elem.placeholder = getSliceStr(elem.name);
}
