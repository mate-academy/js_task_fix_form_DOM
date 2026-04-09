'use strict';

const collection = document.querySelectorAll('input');

for (let i = 0; i < collection.length; i++) {
  const newLabel = document.createElement('label');
  const inputName = collection[i].getAttribute('name');

  newLabel.className = 'field-label';
  newLabel.htmlFor = collection[i].id;
  newLabel.textContent = inputName;
  collection[i].parentElement.append(newLabel);

  const capitalizedName = inputName.charAt(0)
    .toUpperCase() + inputName.slice(1);

  collection[i].placeholder = capitalizedName;
}
