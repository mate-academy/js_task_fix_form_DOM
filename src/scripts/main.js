'use strict';

const elements = document.querySelectorAll('input');

elements.forEach((p) => {
  const labels = document.createElement('label');
  const nameAttr = p.getAttribute('name');
  const idAttr = p.getAttribute('id');

  labels.textContent = nameAttr;
  labels.classList.add('field-label');
  labels.setAttribute('for', idAttr);

  p.parentNode.insertBefore(labels, p.nextElementSibling);

  p.placeholder = nameAttr.charAt(0).toUpperCase() + nameAttr.slice(1);
});
