'use strict';

const getAllInputs = document.querySelectorAll('.field');

for (let i = 0; i < getAllInputs.length; i++) {
  const child = getAllInputs[i].children[0];
  const createLable = document.createElement('label');

  createLable.className = 'field-label';
  createLable.htmlFor = child.id;
  createLable.textContent = child.name.split('t').join('t ');

  child.placeholder = child.name.charAt(0).toUpperCase()
  + child.name.slice(1).split('t').join('t ');

  getAllInputs[i].append(createLable);
};
