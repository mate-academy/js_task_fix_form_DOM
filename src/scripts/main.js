'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((inp) => {
  const label = document.createElement('label');
  let nameElement = inp.name;

  nameElement = nameElement[0].toUpperCase() + nameElement.slice(1);

  if (nameElement.includes('Name')) {
    nameElement = nameElement.replace('Name', ' Name');
  }

  label.htmlFor = inp.id;
  label.innerHTML = nameElement.toUpperCase();
  label.classList = 'field-label';

  inp.placeholder = nameElement;
  inp.insertAdjacentElement('beforebegin', label);
});
