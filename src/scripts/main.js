'use strict';

// creating list of inputs
const listOfInputs = document.querySelectorAll('input');

// creating list of parents conteiners
const listOfParents = document.getElementsByClassName('field');

listOfInputs.forEach((el, i) => {
  // capitalize name from input
  const fieldName = el.name.charAt(0).toUpperCase() + el.name.slice(1);

  // adding placeholder to input
  el.placeholder = fieldName;

  // creating label
  const label = document.createElement('label');

  // setting attributs and conntent for label
  label.className = 'field-label';
  label.textContent = el.name.replace(/([A-Z])/g, ' $1').toUpperCase();
  label.setAttribute('for', el.id);

  // adding label to parent element of input
  listOfParents[i].insertBefore(label, el);
});
