'use strict';

const inputContainers = document.querySelectorAll('.field');

const inputList = document.querySelectorAll('form input');

function fixTheForm(list) {
  list.forEach((element, index) => {
    const label = document.createElement('label');

    label.htmlFor = element.id;
    label.className = 'field-label';
    label.textContent = element.name.toUpperCase();

    inputContainers[index].appendChild(label);

    element.placeholder =
      element.name.charAt(0).toUpperCase() + element.name.slice(1);
  });
}

fixTheForm(inputList);
