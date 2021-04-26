'use strict';

const data = document.querySelectorAll('input');

for (let i = 0; i < data.length; i++) {
  const text = data[i].getAttribute('name');

  const placeholder = text[0].toUpperCase() + text.slice(1);

  const label = document.createElement('label');

  data[i].setAttribute('placeholder', placeholder);
  label.className = 'field-label';
  label.htmlFor = data[i].getAttribute('id');
  label.textContent = data[i].getAttribute('name').toUpperCase();
  data[i].parentElement.append(label);
};
