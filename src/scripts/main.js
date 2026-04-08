'use strict';

const inputs = Array.from(document.querySelectorAll('form input'));

inputs.forEach((item) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const capitalizedName = capitalize(item.name);

  const label = `<label class="field-label" for="${item.id}">${capitalizedName}</label>`;

  item.insertAdjacentHTML('beforebegin', label);
  item.setAttribute('placeholder', capitalizedName);
});
