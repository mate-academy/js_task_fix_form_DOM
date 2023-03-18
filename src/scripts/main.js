'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');
  const { name: inputName, id, parentElement, type } = input;

  label.className = 'field-label';
  label.setAttribute('for', id);
  label.textContent = inputName.replace(/([A-Z])/g, ' $1');

  input.setAttribute('placeholder',
    inputName === 'firstName' ? 'First Name'
      : inputName === 'lastName' ? 'Last Name'
        : inputName[0].toUpperCase() + inputName.slice(1)
  );

  const inputParent = parentElement;

  inputParent.insertBefore(label, input);

  if (type === 'email') {
    input.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');
  }
});
