'use strict';

const input = document.querySelectorAll('input');

input.forEach((item) => {
  const label = document.createElement('label');

  const separatedName = item.name.split(/(?=[A-Z])/).join(' ');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = separatedName;

  item.placeholder =
    separatedName.charAt(0).toUpperCase() + separatedName.slice(1);

  item.before(label);
});
