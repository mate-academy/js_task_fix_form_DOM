'use strict';

const body = document.body;
const allInputs = body.querySelectorAll('input')
const arrayInputs = [...allInputs];
const field = body.querySelectorAll('.field');

arrayInputs.forEach((item) => {
  let upCAs = item.getAttribute('name')
  item.setAttribute('placeholder', upCAs[0].toUpperCase() + upCAs.slice(1));
});

const arrayFromAtributs = arrayInputs.map((item) => {
  return item.getAttribute('id');
})

  field.forEach((item) => {
    const labelElement = document.createElement('label');
    let curent;

    for (let i = 0; i < arrayFromAtributs.length; i++) {
      curent = arrayFromAtributs[i]
      labelElement.textContent = arrayInputs[i].name;
    };

    labelElement.setAttribute('for', curent);
    labelElement.setAttribute('class', 'field-label')
    item.prepend(labelElement);
  });
