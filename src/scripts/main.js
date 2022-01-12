'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map((el) => {
  el.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${el.id}">
      ${el.name.split(/(?=[A-Z])/).join(' ')}
    </label>`
  );

  el.setAttribute('placeholder',
    el.name[0].toUpperCase() + el.name.slice(1).split(/(?=[A-Z])/).join(' ')
  );
});
