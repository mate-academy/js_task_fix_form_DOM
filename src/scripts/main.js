'use strict';

const words = ['Name', 'Last name', 'Email', 'Password', 'Email', 'Password'];

const inputRows = document.querySelectorAll('input');

for (let i = 0; i < inputRows.length; i++) {
  inputRows[i].placeholder = words[i];

  const elementInDiv = document.createElement('label');

  elementInDiv.className = 'field-label';
  elementInDiv.htmlFor = inputRows[i].id;
  elementInDiv.textContent = words[i].toUpperCase();
  inputRows[i].parentElement.append(elementInDiv);
}
