'use strict';
// write code here

const inputAll = document.querySelectorAll('input');
const fieldDivs = document.querySelectorAll('.field')

fieldDivs.forEach((fieldDiv, index) => {
  const label = document.createElement('label');
  label.textContent = inputAll[index].name.toUpperCase();
  label.classList.add('field-label');
  label.htmlFor = inputAll[index].id;
  inputAll[index].placeholder = inputAll[index].name[0].toUpperCase() + inputAll[index].name.slice(1);
  fieldDiv.insertBefore(label, fieldDiv.firstChild);
});


