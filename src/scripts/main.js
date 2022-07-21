'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((item) => {
    const label = document.createElement('label');

    label.innerHTML = item.name;
    label.htmlFor = item.id;

    let placeholder = item.id.split('-').slice(2).join(' ');
    placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

    item.placeholder = placeholder;

    item.parentElement.prepend(label);
});
