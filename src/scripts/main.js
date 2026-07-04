'use strict';

 const inputs = document.querySelectorAll('form input');

 inputs.forEach(function (oneinput) {
  const inputName = oneinput.name;

  const normalname = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  oneinput.placeholder = normalname;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', oneinput.id);

  label.textContent = normalname;

  const div = oneinput.parentElement;

  div.insertBefore(label, oneinput);
 });
