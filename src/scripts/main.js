'use strict';

const inputList = document.querySelectorAll('input');

inputList.forEach(item => {
  const itemName = item.name.split(/(?=[A-Z])/).join(' ');

  item.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${item.id}">
      ${itemName.toUpperCase()}
    </label>`
  );

  item.placeholder = itemName.charAt(0).toUpperCase()
    + itemName.substring(1).toLowerCase();
});
