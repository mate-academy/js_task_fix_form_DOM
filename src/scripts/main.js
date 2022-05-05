'use strict';

const list = [...document.querySelectorAll('input')];

const modifyName = (text) => {
  const splitCamel = text.split(/(?=[A-Z])/).join(' ');

  return splitCamel.charAt(0).toUpperCase() + splitCamel.slice(1);
};

function addLabel(arr) {
  arr.forEach(input => {
    const text = modifyName(input.name);
    const label = `<label class="field-label" for="${input.id}">
      ${text}
    </label>`;

    input.placeholder = text;
    input.insertAdjacentHTML('beforebegin', label);
  });
}

addLabel(list);
