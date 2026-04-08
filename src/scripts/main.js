'use strict';

const fields = document.querySelectorAll('input');

function labelsAndPholders(inputs) {
  for (const item of inputs) {
    const el = document.createElement('label');

    el.className = 'field-label';
    el.setAttribute('for', `${item.id}`);
    el.innerHTML = item.name.toUpperCase();

    item.placeholder = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    item.insertAdjacentElement('beforebegin', el);
  }
}

labelsAndPholders(fields);
