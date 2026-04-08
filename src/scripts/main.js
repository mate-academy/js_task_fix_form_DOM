'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const inputItems = document.querySelectorAll('form input');

  for (let i = 0; i < inputItems.length; i++) {
    const items = inputItems[i];

    if (!items.id) {
      items.id = 'input' + (i + 1);
    }
  }

  for (const item of inputItems) {
    const label = document.createElement('label');

    label.classList.add('field-label');

    label.setAttribute('for', item.id);

    label.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    item.parentElement.insertBefore(label, item);

    item.placeholder = label.textContent;
  }
});
