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
    const placeholderText = strName[0].toUpperCase() + strName.slice(1);

    inputElement.placeholder = placeholderText;

    const myLabel = document.createElement('label');

    myLabel.textContent = inputElement.name;

    if(inputElement.name === 'firstName'){
        myLabel.textContent = 'first name';
        inputElement.placeholder = 'First Name';
    }
    if(inputElement.name === 'lastName'){
        myLabel.textContent = 'last name';
        inputElement.placeholder = 'Last Name';  
    }
    
    myLabel.setAttribute('for', inputElement.id);
    myLabel.className = 'field-label';

    const inputParentNode = inputElement.parentNode;

    inputParentNode.appendChild(myLabel);
  }
}
