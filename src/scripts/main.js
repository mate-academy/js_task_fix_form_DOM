'use strict';

const list = document.querySelectorAll('form input');

[...list].forEach(item => {
  item.placeholder = item.name;
  createLabelFor(item);
});

function createLabelFor(elem) {
  const lbl = document.createElement('label');

  lbl.htmlFor = elem.id;
  lbl.className = 'field-label';
  lbl.textContent = elem.name;

  elem.parentElement.appendChild(lbl);
}
