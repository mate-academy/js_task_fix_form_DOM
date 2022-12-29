'use strict';

const lists = document.querySelectorAll('input');

for (const list of lists) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', list.id);

  if (list.name === 'firstName') {
    list.name = 'First Name';
  };

  if (list.name === 'lastName') {
    list.name = 'Last Name';
  };

  label.textContent = list.name;
  list.placeholder = list.name;
  list.parentElement.append(label);
};
