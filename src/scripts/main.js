'use strict';

const div = document.querySelectorAll('.field');

for (let i = 0; i < div.length; i++) {
  const lab = document.createElement('label');

  lab.setAttribute('for', div[i].firstElementChild.getAttribute('id'));
  lab.className = 'field-label';

  lab.textContent = div[i].firstElementChild.name.replace(
    /([a-z])([A-Z])/, '$1 $2').toUpperCase();

  div[i].append(lab);

  let nameCap = div[i].firstElementChild.name;

  nameCap = (nameCap.charAt(0).toUpperCase() + nameCap.slice(1)).replace(
    /([a-z])([A-Z])/, '$1 $2');

  div[i].firstElementChild.placeholder = nameCap;
};
