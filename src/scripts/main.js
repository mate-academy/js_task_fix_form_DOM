'use strict';

const formInput = document.querySelectorAll('.field-text');
const containerOfInputs = document.querySelectorAll('.field');

formInput.forEach((element, index) => {
  let placeholder = element.name.replace(/([A-Z])/g, ' $1');

  placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  element.setAttribute('placeholder', placeholder);

  const labelForInput = document.createElement('label');

  containerOfInputs[index].append(labelForInput);
  labelForInput.classList.add('field-label');
  labelForInput.htmlFor = element.id;
  labelForInput.textContent = element.name;
});
