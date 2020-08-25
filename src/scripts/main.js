'use strict';

const allInputs = [...document.querySelectorAll('input')];

for (const item of allInputs) {
  let name = item.name.replace(/([A-Z])/g, ' $1');

  name = name.charAt(0).toUpperCase() + name.substr(1);

  item.insertAdjacentHTML('beforebegin', `
  <label for='${item.id}' 
    style='position: absolute; top: 16px;'>${name.toUpperCase()}
  </label>
  `);

  item.placeholder = name;
}
