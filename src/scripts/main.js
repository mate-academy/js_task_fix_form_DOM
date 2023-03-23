'use strict';

const inputs = document.querySelectorAll('input');

for (const item of inputs) {
  item.before(document.createElement('label'));
  item.previousSibling.className = 'field-label';
  item.previousSibling.htmlFor = item.id;

  let newName = item.name.charAt(0).toUpperCase() + item.name.slice(1);

  for (let i = 0; i < item.name.length; i++) {
    if (item.name.charAt(i) === item.name.charAt(i).toUpperCase()) {
      newName = item.name.charAt(0).toUpperCase()
      + item.name.slice(1, i) + ' ' + item.name.slice(i);
    }
  }

  item.previousSibling.textContent = newName;
  item.placeholder = newName;
}
