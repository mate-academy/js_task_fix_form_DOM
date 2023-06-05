'use strict';

const myInputs = document.querySelectorAll('input');

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

for (let input of myInputs) {
  const touchpad = document.createElement('label');
  touchpad.className = "field-label";
  touchpad.htmlFor = `${input.id}`;

  
  let capitalized = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  touchpad.textContent = capitalized;
  input.placeholder = capitalized;
  insertAfter(input, touchpad);
}


// const isUpperCase = (string) => /^[A-Z]*$/.test(string)

// function capitalize(input) {
//     let capitalized = '';
    
//     for (let i = 0; i < input.name.length; i++) {
//         if (isUpperCase(input.name[i])) {
//             capitalized = input.name.slice(0, i-1) + ' ' + input.name.slice(i);
//         }
//     }
    
//     capitalized = input.name.charAt(0).toUpperCase() + input.name.slice(1);
    
//     return capitalized;
// }