'use strict';
// get array of input tags

const inputCollection = [...document.querySelectorAll('input')];

// get div's of the first form

const firstForm = [...document.querySelector('.login-wrap')
  .firstElementChild.children].slice(0, 4);

// get div's of the second form

const secondForm = [...document.querySelector('.login-wrap')
  .lastElementChild.children].slice(0, 2);

// function that creates label tag for each input

function newlabel(inpt) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.htmlFor = `${inpt.id}`;
  item.innerText = `${inpt.name}`;

  return item;
}

// get array of label tags

const labelsArray = inputCollection.map(newlabel);

// function that capitalize first letter

function cap(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// capitalizing first letter of a placeholder

for (const inpt of inputCollection) {
  inpt.placeholder = cap(inpt.name);
}

// function labelPast that append relevant label elements
// to the parent container of input

function labelPast(divArr, labArr) {
  for (let i = 0; i < divArr.length; i++) {
    divArr[i].append(labArr[i]);
  }
}

// call function labelPast for each form

labelPast(firstForm, labelsArray.slice(0, 4));
labelPast(secondForm, labelsArray.slice(4));
