'use strict';

const inputEl = [...document.querySelectorAll('input')];
const divEl = [...document.querySelectorAll('.field')];

inputEl.forEach(input => {
  input.placeholder = input.name.toUpperCase();
});

divEl.forEach(div => {
  const input = div.querySelector('input');
  
  const labelEl = document.createElement("label"); 
  labelEl.className = 'field-label';
  labelEl.htmlFor = input.id;
  labelEl.textContent = input.name;
    
  div.prepend(labelEl);
});
