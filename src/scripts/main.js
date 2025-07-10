const allInputs = document.querySelectorAll('input');

allInputs.forEach(function (item) {
  item.setAttribute('placeholder', item.name);

  const inputId = item.getAttribute('id');
  const labelCur = document.createElement('label');

  labelCur.classList.add('field-label');
  labelCur.setAttribute('for', inputId);
  labelCur.textContent = item.name;
  item.before(labelCur);
});
