'use strict';

const elements = document.querySelectorAll('input');

for (const i of elements) {
  i.placeholder = i.name.charAt(0).toUpperCase() + i.name.slice(1);

  i.insertAdjacentHTML('beforebegin', `
  <label class ="field-label" for="${i.id}">${i.name}</label>`);
};
