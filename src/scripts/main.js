'use strict';

// write code here
const inputFields = [...document.querySelectorAll('input')];

inputFields.forEach(element => {
  const placeholderName = element.getAttribute('name').charAt(0).toUpperCase()
                        + element.getAttribute('name').slice(1);

  element.setAttribute('placeholder', placeholderName);

  const elemLabel = document.createElement('label');

  elemLabel.textContent = element.getAttribute('placeholder');
  elemLabel.className = 'field-label';
  element.parentElement.prepend(elemLabel);
});
