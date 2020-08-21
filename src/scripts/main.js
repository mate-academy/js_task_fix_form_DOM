'use strict';

const list = document.querySelectorAll('input');

for (const elem of list) {
  const label = document.createElement('label');

  elem.placeholder = elem.name[0].toUpperCase()
  + [...elem.name.slice(1)].map(item => {
    if (item === item.toUpperCase()) {
      return ' ' + item.toLowerCase();
    }

    return item;
  }).join('');

  label.className = 'field-label';
  label.htmlFor = elem.id;
  label.textContent = elem.name;
  elem.after(label);
}
