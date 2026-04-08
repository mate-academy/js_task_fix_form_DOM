'use strict';

// write code here
const inputList = [...document.querySelectorAll('input')];

for (const li of inputList) {
  const labelName = li.name.toUpperCase();
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', li.id);
  label.textContent = labelName;
  li.parentNode.append(label, li);
  li.setAttribute('placeholder', labelName);
}
