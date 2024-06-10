'use strict';

const inputs = document.querySelectorAll('input');

function getName(element) {
  let resultName = '';

  for (let i = 0; i < element.length; i++) {
    if (element[i] !== element[i].toLowerCase()) {
      resultName =
        element[0].toUpperCase() +
        element.slice(1, i) +
        ' ' +
        element.slice(i).toLowerCase();

      return resultName;
    }
  }

  resultName = element[0].toUpperCase() + element.slice(1);

  return resultName;
}

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = getName(input.getAttribute('name'));

  input.parentElement.prepend(label);
  input.setAttribute('placeholder', getName(input.getAttribute('name')));
});
