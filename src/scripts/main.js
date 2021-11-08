'use strict';

const input = document.querySelectorAll('input');

for (const item of input) {
  const labelName = document.createElement('label');

  labelName.htmlFor = item.id;
  labelName.className = 'field-label';

  labelName.textContent = item.name.replace('N', ' N');

  item.placeholder = item.name.toUpperCase()[0]
  + item.name.replace('N', ' N').slice(1);
  item.parentElement.append(labelName);
};
