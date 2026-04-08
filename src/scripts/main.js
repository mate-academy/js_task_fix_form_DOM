'use strict';

// write code here
function main() {
  const inputs = document.documentElement.querySelectorAll('input');

  for (const input of inputs) {
    const tempLabel = document.createElement('label');

    tempLabel.setAttribute('class', 'field-label');
    tempLabel.setAttribute('for', input.id);
    tempLabel.setAttribute('textContent', input.name);

    input.parentElement.append(tempLabel);
    // input.insertAdjacentElement('beforebegin', tempLabel);

    const capName = capitalizeFirstLetter(input.name);

    input.setAttribute('placeholder', capName);
  }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

main();
