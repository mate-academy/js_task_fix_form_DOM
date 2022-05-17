'use strict';

const inputs = document.querySelectorAll('input');
const inputsList = [...inputs];

const labelPlaceHolder = function(element) {
  const newLabel = document.createElement('Label');
  const closDiv = element.closest('div');

  newLabel.setAttribute('for', element.id);
  newLabel.className = 'field-label';
  newLabel.textContent = element.name;
  element.placeholder = element.name.charAt(0).toUpperCase() 
  + element.name.slice(1);
  closDiv.append(newLabel);
};

inputsList.map(labelPlaceHolder);
