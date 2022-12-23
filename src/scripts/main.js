'use strict';

const div = document.querySelectorAll('.field');

for (let i = 0; i < div.length; i++) {
  const lab = document.createElement('label');

  lab.setAttribute('for', div[i].firstElementChild.getAttribute('id'));
  lab.className = 'field-label';
  lab.textContent = div[i].firstElementChild.getAttribute('name').toUpperCase();

  div[i].append(lab);

  div[i].firstElementChild.placeholder
  = div[i].firstElementChild.getAttribute('name').toUpperCase();
};
