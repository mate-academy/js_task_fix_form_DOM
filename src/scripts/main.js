'use strict';

function normalize(n) {
  let normalizedName = n[0].toUpperCase() + n.slice(1);

  if (normalizedName.toLowerCase().indexOf('name') > -1) {
    normalizedName = normalizedName.slice(0, -4) + ' name';
  }

  return normalizedName;
}

const input = document.getElementsByTagName('input');

for (let i = 0; i < input.length; i++) {
  const elem = document.createElement('label');

  input[i].parentElement.append(elem);
  input[i].placeholder = normalize(input[i].getAttribute('name'));
  elem.textContent = normalize(input[i].getAttribute('name'));
  elem.setAttribute('for', input[i].getAttribute('id'));
  elem.setAttribute('class', 'field-label');
}
