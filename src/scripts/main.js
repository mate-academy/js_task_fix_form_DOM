'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(item => {
  const label = document.createElement('label');
  const title = item.name.split('N').join(' N');

  label.htmlFor = item.id;
  label.className = 'field-label';
  label.textContent = title;
  item.placeholder = title[0].toUpperCase() + title.slice(1);
  item.parentElement.append(label);
});
