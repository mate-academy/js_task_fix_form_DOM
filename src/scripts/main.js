'use strict';

// write code here
const input = document.querySelectorAll('input');
const field = document.querySelectorAll('.field');

[...field].forEach((subject, index) => {
  const createLabel = document.createElement('label');

  createLabel.className = 'field-label';
  createLabel.htmlFor = [...input][`${index}`].id;
  createLabel.textContent = [...input][`${index}`].name.toUpperCase();

  subject.appendChild(createLabel);
});

[...input].forEach(item => {
  item.placeholder = item.name;
});
