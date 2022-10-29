'use strict';

const itemList = document.querySelectorAll('input');

function addLabel(arg) {
  arg.forEach((item, i) => {
    const label = document.createElement('label');
    const capitalize = arg[i].name.charAt(0).toUpperCase()
    + arg[i].name.slice(1);

    label.className = 'field-label';
    label.setAttribute('for', arg[i].id);
    label.textContent = arg[i].name;
    item.insertAdjacentElement('beforebegin', label);
    item.setAttribute('placeholder', capitalize);
  });
}

addLabel(itemList);
