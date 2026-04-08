'use strict';

const allInputs = Array.from(document.querySelectorAll('form input'));

allInputs.forEach((item) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = item.name;
  label.setAttribute('for', item.id);

  const placehold = item.name[0].toUpperCase() + item.name.slice(1);

  item.setAttribute('placeholder', placehold);

  item.parentElement.insertBefore(label, item);
});
