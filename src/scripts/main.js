'use strict';

 let inputs = Array.from(document.querySelectorAll('input'));
 for (let input of inputs) {
  let label = document.createElement('label');
  label.textContent = input.name.toUpperCase();
  label.setAttribute('for', input.id);
  input.parentElement.prepend(label);
  label.classList.add('field-label');
  input.setAttribute('placeholder', capitalize(input.name));
 }

 function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



