'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.login-wrap');
  const form = document.querySelectorAll('form');
  const boxBtn = document.querySelectorAll('form .login-row');
  const btn = document.querySelectorAll('form .field-button');

  document.querySelectorAll('*').forEach((el) => {
    Object.assign(el.style, {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    });
  });

  if (form.length === 0) {
    return false;
  }

  Object.assign(container.style, {
    width: '500px',
    backgroundColor: '#CFCFCF',
    padding: '20px',
    margin: '20px auto',
  });

  form.forEach((formElement) => {
    Object.assign(formElement.style, {
      width: '100%',
      display: 'flex',
      backgroundColor: 'white',
      flexWrap: 'wrap',
      rowGap: '25px',
      justifyContent: 'space-between',
      padding: '25px 15px 10px',
    });
  });

  form[1].style.flexDirection = 'column';

  const blockInput = document.querySelectorAll('form .field');

  blockInput.forEach((inp) => {
    inp.style.display = 'grid';
  });

  const inputOfForm = document.querySelectorAll('form .field-text');

  inputOfForm.forEach((inputElement) => {
    Object.assign(inputElement.style, {
      padding: '10px',
      borderRadius: '5px',
      borderColor: '#A7B1B8',
    });

    inputOfForm[0].placeholder = 'First Name';
    inputOfForm[1].placeholder = 'Last Name';
    inputOfForm[2].placeholder = 'Email';
    inputOfForm[3].placeholder = 'Password';
    inputOfForm[4].placeholder = 'Email';
    inputOfForm[5].placeholder = 'Password';
  });

  const inputOfForm2 = form[1].querySelectorAll('.field-text');

  inputOfForm2.forEach((inputOfForm2Element) => {
    inputOfForm2Element.style.width = '100%';
  });

  boxBtn.forEach((boxBtnElement) => {
    boxBtnElement.style.width = '100%';
  });

  btn.forEach((btnElement) => {
    Object.assign(btnElement.style, {
      width: '100%',
      color: 'white',
      padding: '13px',
    });
  });

  btn[0].style.backgroundColor = '#78A148';
  btn[1].style.backgroundColor = '#5C7DB5';

  const inputs = document.querySelectorAll('.field-text');

  inputs.forEach((input, index) => {
    const label = document.createElement('label');

    const nameAttr = input.getAttribute('name') || `filed-${index}`;
    const labelText = nameAttr
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const inputId = input.id || `input-${index}`;

    input.id = inputId;
    label.setAttribute('for', inputId);
    label.textContent = labelText;
    label.style.marginBottom = '5px';

    input.parentNode.insertBefore(label, input);
  });
});
