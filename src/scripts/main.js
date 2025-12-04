'use strict';

const inputArr = Array.from(document.querySelectorAll('form input'));

inputArr.forEach((el) => {
  const label = document.createElement('label');

  const capitalize = el.name.charAt(0).toUpperCase() + el.name.slice(1);

  el.setAttribute('placeholder', capitalize);

  label.classList.add('field-label');

  label.textContent = el.name;

  label.setAttribute('for', el.id);

  el.before(label);
});
