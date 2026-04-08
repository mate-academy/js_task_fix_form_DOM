'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((item, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  let id = item.id;

  if (item.id) {
    label.setAttribute('for', id);
  } else {
    id = `input-${item.name || 'field'}-${index}`;
    item.id = id;
    label.setAttribute('for', id);
  }

  label.textContent = item.name || `Field ${index + 1}`;
  item.parentNode.insertBefore(label, item);

  if (item.name) {
    const capitalized = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    item.setAttribute('placeholder', capitalized);
  }
});
