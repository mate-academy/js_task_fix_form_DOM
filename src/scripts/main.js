'use strict';

const input = document.getElementsByTagName('input');

for (let i = 0; i < input.length; i++) {
  const elem = document.createElement('label');

  input[i].parentElement.append(elem);
  input[i].placeholder = input[i].getAttribute('name').toLocaleUpperCase();
  elem.textContent = input[i].getAttribute('name');
  elem.setAttribute('for', input[i].getAttribute('id'));
  elem.setAttribute('class', 'field-label');
}
