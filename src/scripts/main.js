'use strict';

// write code here

const element = document.querySelectorAll('.field');

[...element].map(item => item.insertAdjacentHTML('beforeend', '<label>'));

const getLabel = document.querySelectorAll('label');

[...getLabel].map(item => {
  item.className = 'field-label';
  item.htmlFor = '';
});

for (const el of element) {
  if (el.lastChild) {
    el.lastChild.htmlFor = el.firstElementChild.id;
    el.lastChild.textContent = el.firstElementChild.name;
  }

  el.firstElementChild.placeholder
  = `${el.firstElementChild.name}`[0].toUpperCase()
  + `${el.firstElementChild.name}`.slice(1);
}
