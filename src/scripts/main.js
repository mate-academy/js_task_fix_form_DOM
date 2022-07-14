'use strict';

const inputList = document.querySelectorAll('input');

inputList.forEach(item => {
  item.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${item.id}">
      ${item.name.toUpperCase()}
    </label>`
  );

  item.placeholder = item.name.charAt(0).toUpperCase()
    + item.name.substring(1).toLowerCase();
});
