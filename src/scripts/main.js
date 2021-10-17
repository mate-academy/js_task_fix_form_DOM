'use strict';

const inputs = document.querySelectorAll(`input`);

[...inputs].forEach(item => {
  const thisName = item.getAttribute('name');

  item.setAttribute(
    'placeholder',
    thisName[0].toUpperCase() + thisName.slice(1)
  );

  const sticker = document.createElement(`label`);

  sticker.className = 'field-label';
  sticker.setAttribute('for', item.getAttribute('id'));

  sticker.textContent = thisName;

  item.parentNode.append(sticker);
});
