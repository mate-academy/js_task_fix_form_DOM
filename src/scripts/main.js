'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(el => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = el.id;
  label.textContent = capitalizeFirstLetter(el.name);

  el.parentElement.append(label);
  el.placeholder = capitalizeFirstLetter(el.name);
});

function capitalizeFirstLetter(sameName) {
  let res = sameName[0].toUpperCase();

  for (let i = 1; i < sameName.length; i++) {
    if (sameName[i] === sameName[i].toUpperCase()) {
      res += ` ${sameName[i]}`;
    } else {
      res += `${sameName[i]}`;
    }
  }

  return res;
}
