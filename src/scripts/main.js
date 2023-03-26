'use strict';

const formImputs = [...document.querySelectorAll('input')];

const createLabel = function(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerText = input.name;

  return label;
};

const labels = formImputs.map(createLabel);

for (let i = 0; i < formImputs.length; i++) {
  formImputs[i].parentElement.append(labels[i]);

  formImputs[i].placeholder
    = formImputs[i].name[0].toUpperCase() + formImputs[i].name.slice(1);
};
