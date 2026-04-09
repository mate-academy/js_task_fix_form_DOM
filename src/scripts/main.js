'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const nameAttribute = input.getAttribute('name').toLowerCase();
  let nameText = '';

  if (nameAttribute.endsWith('name')) {
    nameText = nameAttribute.substring(0, nameAttribute.length - 4);
    nameText = nameText.charAt(0).toUpperCase() + nameText.slice(1);
    nameText += ' name';
  } else {
    nameText = nameAttribute.charAt(0).toUpperCase() + nameAttribute.slice(1);
  }

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = `${nameText}`;
  input.setAttribute('placeholder', `${nameText}`);
  input.parentNode.insertBefore(label, input);
});
