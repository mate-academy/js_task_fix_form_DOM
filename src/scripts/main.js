'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const labels of inputs) {
  labels.insertAdjacentHTML('beforebegin',
    `<label class = "field-label" for = "${labels.id}">${labels.name}</label>`
  );

  labels.setAttribute('placeholder',
    `${labels.name[0].toUpperCase() + labels.name.slice(1)}`);
}
