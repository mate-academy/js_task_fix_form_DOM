'use strict';

// write code here
const blocks = document.querySelectorAll('.field');

const arrBlock = [...blocks];

for (const el of arrBlock) {
  const newName = el.firstElementChild.name;
  const type = el.firstElementChild.type;
  const id = el.firstElementChild.id;
  const namePlaceholder = newName[0].toUpperCase() + newName.slice(1);

  el.innerHTML = `
    <label class="field-label" for="${id}">${newName}</label>
    <input type="${type}" name="${newName}"
    class="field-text" id="${id}" placeholder="${namePlaceholder}"
    autocomplete="off">`;
};
