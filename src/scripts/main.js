'use strict';

const inputs = [...document.querySelectorAll('input')];

const addLabel = (list) => {
  list.forEach(input => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    const parent = input.parentElement;

    const placeholdText = input.name[0].toUpperCase() + input.name.slice(1)
      .replace('Name', ' Name');

    label.htmlFor = input.id;
    label.textContent = input.name;
    input.placeholder = placeholdText;

    parent.append(label);
  });
};

addLabel(inputs);
