'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const inp of inputs) {
  inp.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${inp.id}">
        ${inp.name.replace(/([A-Z])/g, ' $1')}
    </label>
  `);

  inp.placeholder = inp.name[0].toUpperCase() + inp.name.slice(1)
    .replace(/([A-Z])/g, ' $1');
}
