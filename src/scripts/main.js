'use strict';

const value = document.querySelectorAll('input');

function goodPlaceholder(arr) {
  return arr[0].toLocaleUpperCase() + arr
    .slice(1).join('').replace(/([A-Z])/g, ' $1');
}

function conversion(elements) {
  for (const element of elements) {
    const parentElement = element.parentElement;
    const newElement = document.createElement('label');
    const word = element.getAttribute('name').split('');

    newElement.textContent = goodPlaceholder(word);
    newElement.className = 'field-label';

    element
      .setAttribute('placeholder', goodPlaceholder(word));

    parentElement.prepend(newElement);
  }
}

conversion(value);
