'use strict';

const allInputs = document.getElementsByTagName('input');

for (let item of allInputs) {
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', item.id)
  label.textContent = item.name.toUpperCase();
  item.parentElement.insertBefore(label, item);

  const placeholderHelper = item.name.charAt(0).toUpperCase() + item.name.slice(1);
  item.placeholder = placeholderHelper;
}

