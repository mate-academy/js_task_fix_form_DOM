'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(item => {
  const labelName = item.name.split(/(?=[A-Z])/).join(' ').toUpperCase();

  item.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${item.id}">
      ${labelName}
    </label>`
  );

  item.placeholder = labelName[0] + labelName.slice(1).toLowerCase();
});
