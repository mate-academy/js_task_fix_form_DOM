'use strict';

const elements = [...document.querySelectorAll('form input')];

elements.forEach((element) => {
  const labels = document.createElement('label');

  element.before(labels);
  labels.className = 'field-label';
  labels.htmlFor = element.id;
  labels.textContent = element.name;

  element.placeholder = labels.textContent[0].toUpperCase()
  + labels.textContent.slice(1).toLowerCase();
});
