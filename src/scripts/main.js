'use strict';

const input = document.body.querySelectorAll('input');

[...input].forEach(item => {
  const label = document.createElement('label');

  item.before(label);
  label.classList.add('field-label');
  label.setAttribute('for', item.id);

  label.textContent = item.name;

  item.setAttribute('placeholder',
    item.name[0].toUpperCase() + item.name.slice(1));

  for (let i = 1; i < item.name.length; i++) {
    const ch = item.name[i];

    if (ch === ch.toUpperCase()) {
      label.textContent = `${item.name.split(ch).join(` ${ch}`)}`;

      item.setAttribute('placeholder',
        `${item.name[0].toUpperCase() + item.name
          .split(ch).join(` ${ch.toLowerCase()}`).slice(1)}`
      );
    }
  }
});
