'use strict';

const input = document.querySelectorAll('.field-text');
const arrOfInputs = [...input];

arrOfInputs.map((el) => (
  el.placeholder = el.name[0].toUpperCase() + el.name.slice(1)
));

for (const key of arrOfInputs) {
  const label = document.createElement('label');

  label.htmlFor = key.id;
  label.innerText = key.name.toUpperCase();
  key.before(label);
}
