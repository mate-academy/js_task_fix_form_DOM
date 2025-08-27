'use strict';

const inputs = document.querySelectorAll('input');

for (const el of inputs) {
  if (el.name) {
    const text = el.name[0].toUpperCase() + el.name.slice(1).toLowerCase();

    el.placeholder = text;

    const lab = document.createElement('label');

    lab.setAttribute('for', el.id);
    lab.textContent = text.toUpperCase();

    // lab.style.fontWeight = 'bold';
    // lab.style.fontSize = '13px';

    el.parentNode.insertBefore(lab, el);
  }
}
