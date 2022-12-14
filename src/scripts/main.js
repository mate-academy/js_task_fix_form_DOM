'use strict';

const input = document.body.querySelectorAll('input');

[...input].forEach(item => {
  const label = document.createElement('label');

  item.before(label);
  label.classList.add('field-label');
  label.setAttribute('for', `${item.id}`);

  if (item.name.includes('Name')) {
    label.textContent = `${item.name.split('N').join(' n')}`;
    item.setAttribute('placeholder', `${item.name.split('N').join(' n')}`);
  } else {
    label.textContent = `${item.name}`;
    item.setAttribute('placeholder', `${item.name}`);
  }
});
