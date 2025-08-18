'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach((item) => {
  const label = `<label class="field-label" for="${item.id}">${item.name}</label>`;

  item.insertAdjacentHTML('beforebegin', label);

  const capitalizedString =
    item.name.charAt(0).toUpperCase() + item.name.slice(1);

  item.setAttribute('placeholder', capitalizedString);
});
