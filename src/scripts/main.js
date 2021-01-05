'use strict';

const arrName = document.querySelectorAll('input');

for (const key of arrName) {
  let res;

  for (let i = 0; i < key.name.length; i++) {
    if (key.name[i] === key.name[i].toUpperCase()) {
      res = [...key.name].slice(0, i).join('') + ' '
      + [...key.name].slice(i, key.name.length).join('');
    }
  }

  key.placeholder = res === undefined
    ? key.name[0].toUpperCase() + key.name.slice(1)
    : res[0].toUpperCase() + res.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = res;
  label.htmlFor = key.id;

  key.before(label);
}
