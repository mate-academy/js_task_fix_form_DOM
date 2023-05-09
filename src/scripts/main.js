'use strict';

const formInputs = document.querySelectorAll('form input');

formInputs.forEach(input => {
  const label = document.createElement('label');

  const nameArray = input.name.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str) {
      return str.toUpperCase();
    });

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = nameArray;
  input.parentElement.appendChild(label);

  input.placeholder = input.name.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str) {
      return str.toUpperCase();
    }); ;
});
