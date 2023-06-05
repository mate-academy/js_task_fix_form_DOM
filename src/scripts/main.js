'use strict';

const newInput = document.querySelectorAll('input');

newInput.forEach(item => {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.htmlFor = item.id;

  label.textContent = item.name.replace('N', ' N');

  item.parentElement.append(label);
});

newInput.forEach(item => {
  item.placeholder = item.name
    .charAt(0).toUpperCase() + item.name.slice(1).replace('N', ' N');
});
