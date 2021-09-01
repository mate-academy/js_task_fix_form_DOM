'use strict';

const item = document.getElementsByTagName('input');

[...item].map((item) => { 

const placeholder = 
  item.name.split(/(?=[A-Z])/).length >=2
  ?item.name.split(/(?=[A-Z])/)[0].charAt(0).toLocaleUpperCase()
    + item.name.split(/(?=[A-Z])/)[0].slice(1) + ' ' +item.name.split(/(?=[A-Z])/)[1]
  :item.name.split(/(?=[A-Z])/)[0].charAt(0).toLocaleUpperCase()
    + item.name.split(/(?=[A-Z])/)[0].slice(1);

const labelName = 
  item.name.split(/(?=[A-Z])/).length >= 2
  ?item.name.split(/(?=[A-Z])/)[0].toUpperCase()+ ' ' + item.name.split(/(?=[A-Z])/)[1].toUpperCase()
  :item.name.split(/(?=[A-Z])/)[0].toUpperCase();


item.parentElement.innerHTML = `
  <label 
    class="field-label" 
    for="${item.name}">
    ${labelName}

    <input 
      type="${item.type}" 
      name="${item.name}"
      class="field-text" 
      autocomplete="${item.autocomplete}"
      id="${item.id}" 
      autofocus 
      placeholder="${placeholder}">
  </label>`;
});
