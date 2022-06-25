'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.map(function(element) {
  const label = document.createElement('label');

  label.className = 'field-label';

  const input = element.querySelector('input');

  const attributeName = input.getAttribute('name');
  const idName = input.getAttribute('id');

  label.setAttribute('for', idName);
  label.innerText = attributeName;
  input.setAttribute('placeholder', attributeName);
  element.append(label);
});
