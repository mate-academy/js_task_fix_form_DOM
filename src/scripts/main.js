'use strict';

const inputsArray = [...document.querySelectorAll('input')];

inputsArray.forEach(item => {
  const label = document.createElement('label');

  label.htmlFor = item.id;
  label.classList.add('field-label');
  label.innerText = item.name.toUpperCase();
  item.parentElement.appendChild(label);

  item.placeholder = item.name[0].toUpperCase()
     + item.name.slice(1).toLowerCase();
});
