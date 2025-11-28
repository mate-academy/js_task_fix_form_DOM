'use strict';

const textInput = document.querySelectorAll('input');

for (const elm of textInput) {
  const elmName = elm.name;
  const elmId = elm.id;

  const myLabel = document.createElement('label');

  myLabel.setAttribute('class', 'field-label');
  myLabel.setAttribute('for', elmId);

  const labelText = elmName[0].toUpperCase() + elmName.slice(1);

  myLabel.textContent = labelText;

  elm.parentElement.prepend(myLabel);
  elm.placeholder = labelText;
}
