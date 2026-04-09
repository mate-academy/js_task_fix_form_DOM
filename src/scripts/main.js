'use strict';

// write code here
const forms1 = document.querySelectorAll('form')[0];
const forms2 = document.querySelectorAll('form')[1];

const fields1 = Array.from(forms1.getElementsByClassName('field-text'));
const fields2 = Array.from(forms2.getElementsByClassName('field-text'));

fields1.forEach((elem) => {
  // Create label
  const createLabel = document.createElement('label');

  createLabel.textContent = elem.getAttribute('name');
  createLabel.className = 'field-label';

  createLabel.setAttribute('for', elem.id);
  elem.before(createLabel);

  // create placeholder
  elem.placeholder =
    elem.getAttribute('name').charAt(0).toUpperCase() +
    elem.getAttribute('name').slice(1);
});

fields2.forEach((elem) => {
  // Create label
  const createLabel = document.createElement('label');

  createLabel.textContent = elem.getAttribute('name');
  createLabel.className = 'field-label';

  createLabel.setAttribute('for', elem.id);
  elem.before(createLabel);

  // create placeholder
  elem.placeholder =
    elem.getAttribute('name').charAt(0).toUpperCase() +
    elem.getAttribute('name').slice(1);
});
