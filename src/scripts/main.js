'use strict';

const inputs = [...document.getElementsByTagName('input')];

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', el.id);
  el.setAttribute('placeholder', capitalize(el.name));
  label.textContent = el.name.toUpperCase();

  el.parentNode.insertBefore(label, el);
});

function capitalize(str) {
  const strUse = str.toLowerCase();

  return strUse.charAt(0).toUpperCase() + strUse.slice(1);
}
