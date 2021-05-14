'use strict';

const inputsList = [...document.querySelectorAll('input')];

function helperFunc(list) {
  list.forEach(item => {
    const label = document.createElement('label');
    const inputText = item.name.slice(0, 1).toUpperCase() + item.name.slice(1);

    label.className = 'field-label';
    label.setAttribute('for', item.id);
    label.textContent = item.name.toUpperCase();
    item.before(label);
    item.setAttribute('placeholder', inputText);
  });
}

helperFunc(inputsList);
