'use strict';

// write code here

const inputs = document.querySelectorAll('input');

inputs.forEach(item => {
  if (item.name.includes('Name')) {
    item.name = item.name.replace('Name', ' name');
  }

  item.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${item.id}">${item.name}</label>`);
  item.placeholder = item.name[0].toUpperCase() + item.name.slice(1);
});
