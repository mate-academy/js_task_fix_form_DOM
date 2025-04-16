'use strict';

const elements = document.querySelectorAll('input');

elements.forEach((p) => {
  const labels = document.createElement('label');

  labels.textContent = p.getAttribute('name');
  labels.classList.add('field-label');
  p.parentNode.insertBefore(labels, p.nextElementSibling);

  p.placeholder = p.getAttribute('name');
  p.placeholder = p.name.charAt(0).toUpperCase() + p.name.slice(1);
});
