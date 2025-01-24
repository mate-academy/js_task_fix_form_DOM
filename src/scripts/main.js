'use strict';

const listOfInputs = Array.from(document.querySelectorAll('input'));

listOfInputs.forEach((elemInput) => {
  function prepareAttribute(nameAttr) {
    return nameAttr.charAt(0).toUpperCase() + nameAttr.slice(1);
  }

  const parentNode = elemInput.parentElement;

  const inputName = elemInput.getAttribute('name');
  const inputId = elemInput.getAttribute('id');

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', inputId);

  elemInput.setAttribute('placeholder', prepareAttribute(inputName));

  parentNode.insertBefore(label, elemInput);
});
