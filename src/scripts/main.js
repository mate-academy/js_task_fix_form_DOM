'use strict';

const formNodeList = document.querySelectorAll('form');
const formArray = Array.from(formNodeList);

for (let j = 0; j < formArray.length; j++) {
  const formElement = formArray[j];
  const inputNodeList = formElement.querySelectorAll('input');
  const inputArray = Array.from(inputNodeList);

  for (let i = 0; i < inputArray.length; i++) {
    const inputElement = inputArray[i];
    const strName = inputElement.name;
    let strNameWithSpace = '';

    for (let x = 0; x < strName.length; x++) {
      if (strName[x] === strName[x].toUpperCase()) {
        strNameWithSpace += ' ';
      }
      strNameWithSpace += strName[x];
    }

    const myLabel = document.createElement('label');

    myLabel.textContent = strNameWithSpace;

    const placeholderText = strNameWithSpace[0].toUpperCase() + 
    strNameWithSpace.slice(1);

    inputElement.placeholder = placeholderText;

    myLabel.setAttribute('for', inputElement.id);
    myLabel.className = 'field-label';

    const inputParentNode = inputElement.parentNode;

    inputParentNode.appendChild(myLabel);
  }
}
