'use strict';

const fields = document.querySelectorAll('input');

const getUpperCaseIndex = str => {
  let index = -1;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toUpperCase();

    if (char === str[i]) {
      index = i;
    }
  }

  return index;
};

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('label');
  const indexBigChar = getUpperCaseIndex(fields[i].name);
  let placeHolder = fields[i].name[0].toUpperCase() + fields[i].name.slice(1);

  if (indexBigChar > -1) {
    const firstPart = placeHolder.slice(0, indexBigChar);
    const secondPart = placeHolder.slice(indexBigChar);

    placeHolder = `${firstPart} ${secondPart}`;
  }

  label.className = 'field-label';
  label.textContent = placeHolder;
  label.htmlFor = fields[i].id;

  fields[i].placeholder = placeHolder;

  fields[i].before(label);
}
