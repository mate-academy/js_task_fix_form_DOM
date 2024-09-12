'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((element) => {
  const label = document.createElement('label');
  const nameArr = Array.from(element.name);

  nameArr.unshift(nameArr.shift().toUpperCase());
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', element.id);
  label.textContent = element.name.toUpperCase();
  element.setAttribute('placeholder', nameArr.join(''));
  element.insertAdjacentElement('beforebegin', label);
});
