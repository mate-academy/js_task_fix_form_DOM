'use strict';

const inputsCollection = [...document.querySelectorAll('input')];

for (let i = 0; i < inputsCollection.length; i++) {
  const label = document.createElement('label');
  let currentValue = '';

  if (
    inputsCollection[i].getAttribute('name') === 'firstName' ||
    inputsCollection[i].getAttribute('name') === 'lastName'
  ) {
    currentValue = inputsCollection[i]
      .getAttribute('name')
      .replace(/([A-Z])/g, ' $1');
  } else {
    currentValue = inputsCollection[i].getAttribute('name');
  }

  label.textContent = currentValue.toUpperCase();

  const parented = inputsCollection[i].parentElement;

  parented.prepend(label);

  inputsCollection[i].placeholder =
    currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
}
