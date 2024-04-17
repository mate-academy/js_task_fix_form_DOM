'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((element) => {
  const label = document.createElement('label');
  let nameElement = element.name;

  nameElement = nameElement[0].toUpperCase() + nameElement.slice(1);

  if (nameElement.includes('Name')) {
    nameElement = nameElement.replace('Name', ' Name');
  }

  label.htmlFor = element.id;
  label.innerHTML = nameElement.toUpperCase();
  label.classList = 'field-label';

  element.placeholder = nameElement;
  element.insertAdjacentElement('beforebegin', label);
});
