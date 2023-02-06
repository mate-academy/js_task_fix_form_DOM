'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(item => {
  const formattedStr = item.name[0].toUpperCase() + item.name.slice(1);

  item.setAttribute('placeholder', formattedStr);

  item.insertAdjacentHTML(
    'beforebegin',
    `<label for="${item.id}" class="field-label">
      ${item.name.toUpperCase()}
    </label>`
  );
});
