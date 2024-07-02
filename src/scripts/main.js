'use strict';

// write code here

function splitByUpperCase(str) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).trim();
  }

const allInputs = [...document.querySelectorAll('input')];
const inputLabelsArr = [];
const field = [...document.querySelectorAll('.field')];

allInputs.forEach((el) => {
    el.placeholder = splitByUpperCase(el.name);
    inputLabelsArr.push(splitByUpperCase(el.name));
})

field.forEach((el, index) => {
    let label = document.createElement('label');
    label.innerText = inputLabelsArr[index].toUpperCase();
    label.className = 'field-label'
    el.prepend(label);
})
