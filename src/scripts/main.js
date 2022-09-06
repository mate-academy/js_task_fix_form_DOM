'use strict';

const fieldInputs = document.getElementsByClassName('field');

for (let i = 0; i < fieldInputs.length; i++) {
  const label = document.createElement('label');
  label.className = 'field-label';
  label.htmlFor = fieldInputs[i].getElementsByClassName('field-text')[0].id;
  label.textContent = fieldInputs[i].getElementsByClassName('field-text')[0].name;
  fieldInputs[i].prepend(label);
  fieldInputs[i].getElementsByClassName('field-text')[0].placeholder = label.textContent[0].toLocaleUpperCase() + label.textContent.slice(1);
}
