'use strict';

const inputs = document.querySelectorAll('input');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

inputs.forEach((item) => {
  const label = `<label for="${item.id}" class="field-label">${item.name}</label>`;

  item.insertAdjacentHTML('beforebegin', label);

  const capitalizedLabel = capitalizeFirstLetter(item.name);

  item.placeholder = capitalizedLabel;
});
