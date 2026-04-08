'use strict';

// write code here
const forms = document.querySelectorAll('form')

const inputsArr = []
for (const form of forms) {
  inputsArr.push(...form.querySelectorAll('input'))
}

for (const inputElement of inputsArr) {

  if (inputElement.id) {
    const tagToAdd = document.createElement('label');

    tagToAdd.setAttribute('for', (inputElement.id));
    tagToAdd.classList.add('field-label');
    tagToAdd.textContent = inputElement.name || 'No name';
    inputElement.parentElement.appendChild(tagToAdd);
  }

  if (inputElement.name) {
    inputElement.placeholder = (inputElement.name.charAt(0).toUpperCase() + inputElement.name.slice(1));
  } else {
    inputElement.placeholder = "No name";
  }

}
