'use strict';

const input = document.querySelectorAll('input');

for (const item of input) {
  if (item.id === 'sign-up-name') {
    const labelName = document.createElement('label');

    labelName.htmlFor = item.id;
    labelName.className = 'field-label';
    labelName.textContent = item.name;
    item.placeholder = item.name.toUpperCase()[0] + item.name.slice(1);
    item.parentElement.append(labelName);
  }

  if (item.id === 'sign-up-last-name') {
    const labelLastName = document.createElement('label');

    labelLastName.htmlFor = item.id;
    labelLastName.className = 'field-label';
    labelLastName.textContent = item.name;
    item.placeholder = item.name.toUpperCase()[0] + item.name.slice(1);
    item.parentElement.append(labelLastName);
  }

  if (item.id === 'sign-up-email') {
    const labelUpEmeil = document.createElement('label');

    labelUpEmeil.htmlFor = item.id;
    labelUpEmeil.className = 'field-label';
    labelUpEmeil.textContent = item.name;
    item.placeholder = item.name.toUpperCase()[0] + item.name.slice(1);
    item.parentElement.append(labelUpEmeil);
  }

  if (item.id === 'sign-up-password') {
    const labelUpPassword = document.createElement('label');

    labelUpPassword.htmlFor = item.id;
    labelUpPassword.className = 'field-label';
    labelUpPassword.textContent = item.name;
    item.placeholder = item.name.toUpperCase()[0] + item.name.slice(1);
    item.parentElement.append(labelUpPassword);
  }

  if (item.id === 'sign-in-email') {
    const labelInEmeil = document.createElement('label');

    labelInEmeil.htmlFor = item.id;
    labelInEmeil.className = 'field-label';
    labelInEmeil.textContent = item.name;
    item.placeholder = item.name.toUpperCase()[0] + item.name.slice(1);
    item.parentElement.append(labelInEmeil);
  }

  if (item.id === 'sign-in-password') {
    const labelInPassword = document.createElement('label');

    labelInPassword.htmlFor = item.id;
    labelInPassword.className = 'field-label';
    labelInPassword.textContent = item.name;
    item.placeholder = item.name.toUpperCase()[0] + item.name.slice(1);
    item.parentElement.append(labelInPassword);
  }
}
