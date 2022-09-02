'use strict';

const inputList = document.querySelectorAll('input');

const inputArray = [...inputList];

for (let i = 0; i < inputArray.length; i++) {
  const parentElement = inputArray[i].parentElement;

  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = inputArray[i].id;

  label.innerText = inputArray[i].name.split('').map(item => {
    if (item === item.toUpperCase()) {
      return ' ' + item;
    } else {
      return item;
    }
  }).join('');

  const placeholder
  = inputArray[i].name.split('').map((item, position) => {
    if (position === 0) {
      return item.toLocaleUpperCase();
    } else if (item === item.toUpperCase()) {
      return ' ' + item;
    } else {
      return item;
    }
  }).join('');

  inputArray[i].placeholder = placeholder;

  parentElement.append(label);
}
