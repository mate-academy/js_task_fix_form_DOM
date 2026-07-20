'use strict';

const inputs = [...document.querySelectorAll('form > div > input')];

for (const item of inputs) {
  const label = document.createElement('label');
  const nameHolder =
    item.getAttribute('name')[0].toUpperCase() +
    item.getAttribute('name').slice(1);

  label.className = 'field-label';

  label.setAttribute('for', item.id);
  label.textContent = item.getAttribute('name');
  item.parentElement.appendChild(label);
  item.setAttribute('placeholder', nameHolder);
}

// console.log(labels);
// console.log(inputs);
