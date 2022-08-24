'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
  item.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${item.id}">${item.name}</label>
  `);

  item.placeholder = item.name[0].toUpperCase();

  for (let i = 1; i < item.name.length; i++) {
    if (item.name[i] === item.name[i].toUpperCase()) {
      item.placeholder += ` ${item.name[i]}`;
    } else {
      item.placeholder += item.name[i];
    }
  }
});
