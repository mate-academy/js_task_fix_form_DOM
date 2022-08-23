'use strict';

const inputList = document.querySelectorAll('input');

const inputArray = [...inputList];

for (let i = 0; i < inputArray.length; i++) {
  const parentElement = inputArray[i].parentElement;

  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = inputArray[i].id;
  label.innerText = inputArray[i].name.toLocaleUpperCase();

  const placeholder
  = inputArray[i].name.toLowerCase().split('').map((item, position) => {
    if (position === 0) {
      return item.toLocaleUpperCase();
    } else {
      return item;
    }
  }).join('');

  inputArray[i].placeholder = placeholder;

  parentElement.append(label);
}

// console.log(inputList);
