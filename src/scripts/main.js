'use strict';

function separate(text) {
  let separatedText = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[i].toLowerCase()) {
      separatedText += ' ';
    }

    separatedText += text[i];
  }

  return separatedText;
}

function capitalize(text) {
  let capitalizedText = '';

  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      capitalizedText += text[i].toUpperCase();
    } else if (text[i] !== text[i].toLowerCase()) {
      capitalizedText += ' ' + text[i].toLowerCase();
    } else {
      capitalizedText += text[i];
    }
  }

  return capitalizedText;
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = separate(input.getAttribute('name'));

  input.placeholder = capitalize(input.getAttribute('name'));
  input.before(label);
}
