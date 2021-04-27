'use strict';

const list = document.querySelectorAll('input');

for (const elem of list) {
  const name = elem.getAttribute('name');
  const id = elem.getAttribute('id');
  const label = `<label for=${id}>${name.toUpperCase()}</label>`;
  elem.setAttribute('placeholder', name[0].toUpperCase() + name.slice(1));
  elem.insertAdjacentHTML('beforebegin', label);
  elem.previousSibling.style.display = 'block';
}
