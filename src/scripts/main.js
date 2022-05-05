'use strict';

const list = [...document.querySelectorAll('input')];

function addLabel(arr) {
  arr.forEach(input => {
    const label = `<label class="field-label" for="${input.id}">
      ${input.name}
    </label>`;

    input.placeholder = input.name.charAt(0).toUpperCase()
    + input.name.slice(1);
    input.insertAdjacentHTML('beforebegin', label);
  });
}

addLabel(list);
