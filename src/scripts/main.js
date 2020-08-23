'use strict';

const inputList = document.querySelectorAll('input');

const addLabel = function(list) {
  list.forEach(input => {
    input.insertAdjacentHTML('beforebegin', `
      <label class="field-label", for="${input.id}">
        ${camelToSpaced(input.name)}
      </label>
    `);

    input.placeholder = camelToSpaced(input.name)[0].toUpperCase()
    + camelToSpaced(input.name).slice(1).toLowerCase();
  });
};

function camelToSpaced(str) {
  return str.split(/(?=[A-Z])/).join(' ');
}

addLabel(inputList);
