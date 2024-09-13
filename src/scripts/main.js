'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((element) => {
  const label = document.createElement('label');
  const nameArr = Array.from(element.name).map((value, index) => {
    if (value === value.toUpperCase() && index !== 0) {
      return ' ' + value;
    }

    return value;
  });

  nameArr.unshift(nameArr.shift().toUpperCase());
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', element.id);

  label.textContent = nameArr.join('').toUpperCase();

  element.setAttribute('placeholder', nameArr.join(''));
  element.insertAdjacentElement('beforebegin', label);
});
