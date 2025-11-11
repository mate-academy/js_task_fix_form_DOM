'use strict';

// write code here
const inputs = [...document.querySelectorAll('form input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input['id']);

  const title = input['name'].replace(/([A-Z])/g, ' $1');

  const theFirst = title.slice(0, 1).toUpperCase();
  const theRest = title.slice(1).toLowerCase();

  label.textContent = theFirst.concat(theRest);
  input.before(label);

  input.placeholder = theFirst.concat(theRest);
}
