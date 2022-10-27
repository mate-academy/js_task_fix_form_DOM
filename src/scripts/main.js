'use strict';

const inputsList = document.getElementsByTagName('input');
const updatedNames = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
};

for (const inputItem of inputsList) {
  const newElement = document.createElement('label');

  newElement.setAttribute('class', `field-label`);
  newElement.setAttribute('for', `${inputItem.id}`);
  inputItem.setAttribute('placeholder', `${updatedNames[inputItem.name]}`);
  newElement.innerText = `${updatedNames[inputItem.name]}`;

  const itemParent = inputItem.parentElement;

  itemParent.prepend(newElement);
}
