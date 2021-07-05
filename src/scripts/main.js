'use strict';

const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const input = inputs[i];
  const field = fields[i];
  let title = input.name[0].toUpperCase() + input.name.slice(1);
  const splittedTitleForCycle = title.split('');

  field.style.paddingTop = '20px';
  label.htmlFor = input.id;
  title = title.split('');

  for (let j = 1; j < splittedTitleForCycle.length; j++) {
    if (
      splittedTitleForCycle[j].toUpperCase()
      === splittedTitleForCycle[j]
    ) {
      title.splice(j, 0, ' ');
    }
  }

  title = title.join('');
  label.innerText = title;
  input.placeholder = title;

  field.prepend(label);
}
