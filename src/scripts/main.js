'use strict';

const input = [...document.querySelectorAll('input')];

function addElements(elements) {
  elements.forEach(el => {
    const label = document.createElement('label');
    const names = formatText(el.name);

    label.htmlFor = el.id;
    label.className = 'field-label';
    label.innerText = names;
    el.placeholder = names;

    el.parentElement.prepend(label);
  });
}

function formatText(text) {
  return text.split('')
    .map(el => {
      if (el === el.toUpperCase()) {
        return ' ' + el;
      }

      return el;
    })
    .join('')
    .toUpperCase();
}

addElements(input);
