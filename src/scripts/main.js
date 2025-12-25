'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

function formatLabel(item) {
  item.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${item.id}">${item.name}</label>`,
  );

  item.setAttribute('placeholder', item.name.toLocaleUpperCase());
}

for (const item of inputs) {
  formatLabel(item);
}
