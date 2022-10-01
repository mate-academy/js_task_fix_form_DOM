'use strict';

const inputCollection = [...document.querySelectorAll('input')];

const firstForm = [...document.querySelector('.login-wrap')
  .firstElementChild.children].slice(0, 4);

const secondForm = [...document.querySelector('.login-wrap')
  .lastElementChild.children].slice(0, 2);

function newlabel(inpt) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.htmlFor = `${inpt.id}`;
  item.innerText = `${inpt.name}`;

  return item;
}

const labelsArray = inputCollection.map(newlabel);

function stringOfPlaceholder(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      res += ' ' + str[i];
    } else {
      res += str[i];
    }
  }

  return res[0].toUpperCase() + res.slice(1);
}

for (const inpt of inputCollection) {
  inpt.placeholder = stringOfPlaceholder(inpt.name);
}

function labelInsert(divArr, labArr) {
  for (let i = 0; i < divArr.length; i++) {
    divArr[i].append(labArr[i]);
  }
}

labelInsert(firstForm, labelsArray.slice(0, 4));
labelInsert(secondForm, labelsArray.slice(4));
