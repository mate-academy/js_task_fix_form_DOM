'use strict';

let inputElement = [...document.querySelectorAll('form input')]

inputElement.forEach( elem => {

  let labelElement = document.createElement('label')
  labelElement.classList.add('field-label')
  labelElement.htmlFor = elem.id || ''
  labelElement.textContent = elem.name.replace(/(?<!\s)([A-Z])/g, ' $1').toUpperCase() || ''
  elem.placeholder = elem.name.replace(/(?<!\s)([A-Z])/g, ' $1') || ''
  elem.style.textTransform = 'capitalize'
  elem.before( labelElement)
})




