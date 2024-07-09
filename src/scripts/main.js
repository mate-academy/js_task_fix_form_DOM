'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const nameAtribute = input.getAttribute('name').toLowerCase();
  const nameText = nameAtribute.charAt(0).toUpperCase() + nameAtribute.slice(1);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = `${nameText}`;
  input.setAttribute('placeholder', `${nameText}`);
  input.parentNode.insertBefore(label, input);
});
