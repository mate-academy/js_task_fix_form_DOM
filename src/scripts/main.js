'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];
inputs.map(elem => {
 const label = document.createElement('label');
 label.setAttribute('for', elem.id);
 label.classList.add('field-label');
 label.textContent = elem.name;
 const parrent = elem.parentElement;
 parrent.appendChild(label);
 elem.placeholder = elem.name.slice(0,1).toUpperCase() + elem.name.slice(1);
})

