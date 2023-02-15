'use strict';

const words = ['Name', 'Last name', 'Email', 'Password', 'Email', 'Password'];
let countWords = 0;

const inputRows = document.querySelectorAll('input');

for (const index of inputRows) {
  index.placeholder = words[countWords];

  const elementInDiv = document.createElement('label');

  elementInDiv.className = 'field-label';
  elementInDiv.htmlFor = index.id;
  elementInDiv.textContent = words[countWords].toUpperCase();
  index.parentElement.append(elementInDiv);
  countWords++;
}
