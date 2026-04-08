'use strict';

const fieldsList = [...document.querySelectorAll('input')];

fieldsList.forEach((item) => {
  item.placeholder = item.name[0].toUpperCase() + item.name.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = item.name;
  item.parentNode.prepend(label);
});
