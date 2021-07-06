'use strict';

const getAllInputs = document.querySelectorAll('.field');
const firstForm = document.body.children[0].children[0];
const secondForm = document.body.children[0].children[1];

for (let i = 0; i < getAllInputs.length; i++) {
  const child = getAllInputs[i].children[0];
  const createLable = document.createElement('label');

  createLable.className = 'field-label';
  createLable.htmlFor = child.id;
  createLable.textContent = child.name.split('t').join('t ');

  child.placeholder = child.name.charAt(0).toUpperCase()
  + child.name.slice(1).split('t').join('t ');

  if (i < 4) {
    firstForm.children[i].append(createLable);
  };

  if (i === 4) {
    secondForm.children[0].append(createLable);
  };

  if (i === 5) {
    secondForm.children[1].append(createLable);
  };
};
