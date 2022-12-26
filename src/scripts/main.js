'use strict';

const onlyInputs = document.querySelectorAll('form input');

[...onlyInputs].map(item => {
  const reg = /(?=[A-Z])/g;

  item.setAttribute('placeholder',
    item.name[0].toUpperCase()
      + item.name.substring(1).replace(reg, ' '));

  const label = document.createElement('label');

  label.setAttribute('for', item.id);
  label.setAttribute('class', 'field-label');
  label.textContent = item.name.replace(reg, ' ');
  item.parentElement.append(label);
});
