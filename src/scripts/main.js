'use strict';

const input = document.body.querySelectorAll('input');

[...input].forEach(item => {
  const label = document.createElement('label');

  item.before(label);
  label.classList.add('field-label');
  label.setAttribute('for', item.id);

  label.textContent = item.name;
  item.setAttribute('placeholder', item.name);

  for (const ch of item.name) {
    if (ch === ch.toUpperCase()) {
      label.textContent = `${item.name.split(ch).join(` ${ch}`)}`;

      item.setAttribute('placeholder',
        `${item.name.split(ch).join(` ${ch.toLowerCase()}`)}`
      );
    }
  }
});
