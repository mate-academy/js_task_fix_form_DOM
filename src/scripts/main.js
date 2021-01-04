'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const inp of inputs) {
  inp.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${inp.getAttribute('id')}">${inp.name}</label>
  `);
  inp.placeholder = inp.name[0].toUpperCase() + inp.name.slice(1);
}
