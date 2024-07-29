'use strict';

const inputs = document.getElementsByClassName('field-text');

Array.from(inputs).forEach((x) => {
  const label = document.createElement('label');

  label.htmlFor = x.id;

  const nameAttr = x.getAttribute('name').trim();

  label.textContent = nameAttr.charAt(0).toUpperCase() + nameAttr.slice(1);

  x.placeholder = nameAttr.charAt(0).toUpperCase() + nameAttr.slice(1);

  x.parentNode.insertBefore(label, x);
});
