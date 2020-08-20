'use strict';

// write code here

const list = document.querySelectorAll('form');
let countOfListLength = 0;

for (let i = 0; i < list.length; i++) {
  for (let y = 0; y < list[i].length; y++) {
    list[i][y].placeholder
    = list[i][y].name.charAt(0).toUpperCase()
    + list[i][y].name.substr(1);

    if (list[i][y].className === 'field-text') {
      const list2 = document.querySelectorAll('div.field');

      const label = document.createElement('label');

      label.className = 'field-label';
      label.htmlFor = list[i][y].id;
      label.textContent = list[i][y].name;
      list2[countOfListLength].append(label);
      countOfListLength++;
    }
  }
}
