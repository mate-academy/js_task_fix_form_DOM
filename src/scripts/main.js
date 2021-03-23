'use strict';

[...document.querySelectorAll('.field-text')]
  .map(item => {
    const lable = document.createElement('label');

    lable.className = 'field-label';
    lable.textContent = `${item.name}`;
    lable.setAttribute('for', `${item.id}`);

    item.placeholder = `${item.name}`;
    item.before(lable);
  });
