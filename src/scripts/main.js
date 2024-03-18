'use strict';

const list = document.querySelectorAll('input');

[...list].map((item) => {
  item.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${item.id}">
      ${item.name.toUpperCase()}
    </label>`,
  );

  item.placeholder =
    item.name.slice(0, 1).toUpperCase() + item.name.slice(1).toLowerCase();
});
