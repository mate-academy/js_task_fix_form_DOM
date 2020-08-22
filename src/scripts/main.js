'use strict';

const inputList = document.querySelectorAll('input');

const addLabel = function(list) {
  list.forEach(input => {
    input.insertAdjacentHTML('beforebegin', `
      <label class="field-label", for="${input.id}">
        ${input.name}
      </label>
    `);

    input.placeholder = `${
      input.name[0].toUpperCase() + input.name.slice(1).toLowerCase()
    }`;
  });
};

addLabel(inputList);
