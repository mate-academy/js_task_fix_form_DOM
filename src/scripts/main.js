'use strict';

// write code here
const inputs = [...document.querySelectorAll('form input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input['id']);
  label.textContent = input['name'].replace(/([A-Z])/g, ' $1').toUpperCase();
  input.before(label);

  const title = input['name'].replace(/([A-Z])/g, ' $1');

  const theFirst = title.slice(0, 1).toUpperCase();
  const theRest = title.slice(1).toLowerCase();

  input.placeholder = theFirst.concat(theRest);
}
