'use strict';

const formInputs = document.querySelectorAll('form input');

formInputs.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  label.classList.add('field-label');

  label.textContent = input.name.replace(
    /([A-Z])/g, ' $1').replace(/^./, function(str) {
    return str.toUpperCase();
  });

  input.parentNode.insertBefore(label, input);

  input.placeholder = label.textContent;
});
