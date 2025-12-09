'use strict';

const blocks = document.querySelectorAll('.field');

if (blocks) {
  for (let element of blocks) {
    const inputElement = element.querySelector('input');

    if (inputElement){
      const inputName = inputElement.getAttribute('name');
      const el = document.createElement('label')
      el.setAttribute('for', inputElement.getAttribute('id'));
      el.setAttribute('class', 'field-label');
      el.textContent = inputName.toUpperCase();

      //element.prepend(el);
      element.insertAdjacentElement('afterbegin', el);

      const placeholderValue = inputName[0].toUpperCase().concat(inputName.slice(1));
      inputElement.setAttribute('placeholder', placeholderValue);
    }
  }
}
