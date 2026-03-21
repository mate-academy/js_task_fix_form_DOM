'use strict';

  let k = document.querySelectorAll('form .field .field-text');

  let m = Array.from(k);

  m.forEach((el) => {
    let k = el.getAttribute('name');
    let p = el.getAttribute('id');

    k = k[0].toUpperCase() + k.slice(1);
    el.setAttribute('placeholder', k);
    const label = document.createElement('label');
    label.className = 'field-label';
    label.htmlFor = p;
    label.textContent = k;

    el.before(label);
  });
