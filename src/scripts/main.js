'use strict';

const inputs = document.querySelectorAll('input');

const fields = document.querySelectorAll('.field');

const labels = [];

inputs.forEach((x, i) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = x.id;
  label.innerText = x.name.toUpperCase();
  labels.push(label);
  x.placeholder = x.name.replace(x.name[0], x.name[0].toUpperCase());
  fields[i].append(labels[i]);
});

// write code here
