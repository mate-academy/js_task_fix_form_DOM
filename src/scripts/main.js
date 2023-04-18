'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
  const label = document.createElement('label');
  const inputName = input.getAttribute('name');

  input.style.textTransform = 'capitalize';

  label.classList.add('field-label');
  label.setAttribute('for', index);

  if (inputName.includes('Name')) {
    label.innerText = inputName.replace(/Name/g, ' Name');
    input.setAttribute('placeholder', inputName.replace(/Name/g, ' Name'));
  } else {
    label.innerText = inputName;
    input.setAttribute('placeholder', inputName);
  }

  input.parentElement.appendChild(label);
});
// write code here
