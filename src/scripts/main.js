'use strict';

const inputs = [...document.querySelectorAll('input.field-text')];

const divs = inputs.map((node) => node.parentNode);

divs.forEach((divNode, i) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputs[i].getAttribute('id'));
  label.textContent = inputs[i].getAttribute('name');

  const str = inputs[i].getAttribute('name');
  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);

  inputs[i].setAttribute('placeholder', capitalizedStr);

  divNode.append(label);
});
