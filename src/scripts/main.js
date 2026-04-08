'use strict';

const inputAll = document.querySelectorAll('.field-text');

inputAll.forEach((item) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${item.id}`);

  item.setAttribute(
    'placeholder',
    `${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`,
  );
  label.innerText = item.name;
  item.parentNode.insertBefore(label, item);
});
