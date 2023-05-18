'use strict';

const value = document.querySelectorAll('input');

function goodPlaceholder(arr) {
  return `${arr[0]}`.toLocaleUpperCase() + `${arr.slice(1).join('')}`;
}

function conversion(elements) {
  for (const element of elements) {
    const Parent = element.parentElement;
    const newElement = document.createElement('label');

    newElement.textContent = `${element.getAttribute('name')}`;
    newElement.className = 'field-label';

    const word = element.getAttribute('name').split('');

    element
      .setAttribute('placeholder', `${goodPlaceholder(word)}`);

    Parent.prepend(newElement);
  }
}

conversion(value);
