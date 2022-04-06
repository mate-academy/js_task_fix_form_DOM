'use strict';

const input = document.querySelectorAll('input');

for (const i of [...input]) {
  i.insertAdjacentHTML('beforebegin', `
    <label for = "${i.id}" class = "field-label">
      ${i.name}    
    </label>
  `);
  i.placeholder = i.name.toUpperCase();
}
