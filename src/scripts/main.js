'use strict';

// write code here
const allForms = [...document.querySelectorAll('input')];

for (const value of allForms) {
  const newName = value.name.split(/(?=[A-Z])/).join(' ');
  const twoWordsName = newName[0].toUpperCase() + newName.slice(1);

  value.placeholder = newName[0].toUpperCase()
    + newName.slice(1);

  value.insertAdjacentHTML('beforebegin', `
    <label class='field-label' for='${value.id}'>
      ${twoWordsName}
    </label>
  `);
}
