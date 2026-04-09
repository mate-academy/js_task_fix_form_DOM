'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((el) => {
  const newEl = document.createElement('label');
  const capName = el.name.split('');

  capName[0] = capName[0].toUpperCase();

  const fin = capName.join('');

  el.placeholder = fin;

  newEl.classList.add('field-label');

  newEl.textContent = el.name;

  newEl.htmlFor = el.id;

  el.insertAdjacentElement('beforebegin', newEl);
});
