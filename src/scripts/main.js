'use strict';

const inputList = document.querySelectorAll('input');

inputList.forEach((item) => {
  const label = document.createElement('label');
  const labelText = item.getAttribute('name');
  const placeholderText = item.getAttribute('name');

  label.setAttribute('for', item.getAttribute('id'));
  label.setAttribute('class', 'field-label');

  item.setAttribute(
    'placeholder',
    placeholderText.charAt(0).toUpperCase() + placeholderText.slice(1),
  );

  label.textContent = labelText;

  item.insertAdjacentElement('beforeBegin', label);
});
