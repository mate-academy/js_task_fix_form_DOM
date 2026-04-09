'use strict';

// write code here

const allInput = document.querySelectorAll('input');

allInput.forEach((item) => {
  const label = document.createElement('label');
  const labelName = item.getAttribute('name').replace(/([A-Z])/g, ' $1');
  const labelText = labelName.charAt(0).toUpperCase() + labelName.slice(1);
  const placeholder = labelText;

  label.textContent = labelText;
  label.classList.add('field-label');
  label.setAttribute('for', item.id);
  item.parentElement.insertBefore(label, item);
  item.setAttribute('placeholder', placeholder);
});
