'use strict';

const arrInputs = document.querySelectorAll('input');

for (let i = 0; i < arrInputs.length; i++) {
  const item = document.createElement('label');

  item.textContent = arrInputs[i].name;
  item.setAttribute('for', `${arrInputs[i].id}`);
  item.setAttribute('class', 'field-label');
  arrInputs[i].parentElement.append(item);

  arrInputs[i].setAttribute(
    'placeholder',
    `${arrInputs[i].name[0].toUpperCase()}${arrInputs[i].name.substring(1)}`,
  );
}
