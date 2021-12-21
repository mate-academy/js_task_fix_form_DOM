'use strict';

const inputs = document.querySelectorAll('.field-text');

[...inputs].forEach(
  x => x.setAttribute(
    'placeholder', x.name[0].toUpperCase() + x.name.slice(1)
  )
);

[...inputs].forEach(
  x => x.insertAdjacentHTML(
    'beforebegin', `<label class = field-label for = ${x.id}>${x.name}</label>`
  )
);
