'use strict';

const inputs = document.querySelectorAll('input');
const upperChart = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

[...inputs].map((item) => {
  item.insertAdjacentHTML('beforebegin',
    `<label for="${item.id}" class="field-label">${item.name}</label>`);
  item.placeholder = upperChart(item.name);
});
