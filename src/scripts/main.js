'use strict';

const inputs = document.querySelectorAll('input');
const inputsList = [...inputs];
const labels = Array(inputsList.length);

function capitalize(string) {
  const str = string.toLowerCase().split('');

  str[0] = str[0].toUpperCase();

  return str.join('');
}

for (let i = 0; i < labels.length; i++) {
  inputsList[i].placeholder = capitalize(inputsList[i].name);
  labels[i] = document.createElement('label');
  labels[i].className = 'field-label';
  labels[i].htmlFor = inputsList[i].id;
  labels[i].innerText = inputsList[i].innerText;
  document.querySelectorAll('.field')[i].append(labels[i]);
}
