'use strict';

const inputAll = document.querySelectorAll('input');

inputAll.forEach((el) => {
  const nameValue = el.getAttribute('name');

  const formattedName = nameValue[0].toUpperCase() + nameValue.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';

  label.setAttribute('for', el.id);
  label.textContent = nameValue;

  el.placeholder = formattedName;

  el.parentElement.append(label);
});
