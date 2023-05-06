'use strict';

const input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';

  const inputId = input[i].getAttribute('id');

  label.setAttribute('for', inputId);

  const textLabel = document.createTextNode(input[i].name);

  label.append(textLabel);

  input.forEach(el => {
    el.placeholder = `${el.name.charAt(0).toUpperCase() + el.name.slice(1)}`;
  });

  input[i].before(label);
}
