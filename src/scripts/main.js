'use strict';

const forms = [...document.querySelectorAll('form')];

forms.forEach((e) => {
  const inputs = [...e.querySelectorAll('input')];

  inputs.forEach((i) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', `${i.id}`);

    const capitalizedName = i.name.charAt(0).toUpperCase() + i.name.slice(1);

    label.textContent = capitalizedName;
    i.placeholder = capitalizedName;

    i.before(label);
  });
});
