'use strict';

const inputs = document.querySelectorAll('input');

const textTransform = (text) => {
  let result = text.slice(0, 1).toUpperCase() + text.slice(1);

  for (let i = 1; i < text.length; i++) {
    if (text[i] !== text[i].toLowerCase()) {
      result = result.replace(text[i], ` ${text[i]}`);
    }
  }

  return result;
};

const createLables = (items) => {
  items.forEach((item) => {
    const lable = document.createElement('label');
    const itemName = item.getAttribute('name');

    lable.innerText = textTransform(itemName).toUpperCase();
    lable.setAttribute('for', item.id);
    lable.classList.add('field-label');
    item.setAttribute('placeholder', textTransform(itemName));
    item.before(lable);
  });
};

createLables(inputs);
