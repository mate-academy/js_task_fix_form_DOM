'use strict';

const inputs = document.querySelectorAll('input');

const seperateCamelCase = (string) => {
  return string.replace(/[A-Z]/g, letter => (
    ' ' + letter.toLowerCase())
  );
};

inputs.forEach((input, index) => {
  const label = document.createElement('label');
  const inputName = input.getAttribute('name');

  input.style.textTransform = 'capitalize';

  label.classList.add('field-label');
  label.setAttribute('for', index);

  if (/[A-Z]/.test(inputName)) {
    label.innerText = seperateCamelCase(inputName);
    input.setAttribute('placeholder', seperateCamelCase(inputName));
  } else {
    label.innerText = inputName;
    input.setAttribute('placeholder', inputName);
  }

  input.parentElement.appendChild(label);
});
// write code here
