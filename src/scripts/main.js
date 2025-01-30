'use strict';

const collection = document.querySelectorAll('.field');

for (const field of collection) {
  const child = document.createElement('label');

  child.textContent = field.children[0].name.toUpperCase();
  child.class = 'field-label';
  child.for = field.children[0].id;

  field.children[0].placeholder =
    field.children[0].name[0].toUpperCase() + field.children[0].name.slice(1);
  field.prepend(child);
}
