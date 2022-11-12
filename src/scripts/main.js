'use strict';

// write code here
// create function to rewrite input's name;
const newString = (string) => {
  let result = string;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result = string.slice(0, i)
        + ' ' + string.slice(i);
    }
  };

  return result.toLowerCase();
};

const allInputs = [...document.querySelectorAll('input')];

allInputs.forEach(input => {
  const label = document.createElement('label');// creating tag label;

  label.className = 'field-label';// assign a class to the tag;
  label.htmlFor = input.id; // assing label and input;
  label.textContent = input.name; // set text for label relying on input's name;

  const line = newString(label.textContent);

  input.placeholder = line[0].toUpperCase() + line.slice(1);

  input.parentElement.append(label);// append label to parent element of input
});
