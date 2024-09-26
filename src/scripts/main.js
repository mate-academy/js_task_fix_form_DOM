'use strict';

// write code here

function firstUpperChar(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('for', input.id);

    label.classList.add('field-label');
    label.textContent = input.name.toUpperCase();

    input.placeholder = firstUpperChar(input.name);
    input.parentNode.insertBefore(label, input);
  });
});
