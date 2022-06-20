'use strict';

const input = document.querySelectorAll('input');

input.forEach(x => {
  const label = document.createElement('label');

  label.setAttribute('for', x.id);
  label.classList.add('field-label');

  label.innerHTML = x.name.split('N').join(' n').toLocaleUpperCase();
  x.setAttribute('placeholder', `${x.name.split('N').join(' n')}`);
  x.before(label);
});
