const allInputs = document.querySelectorAll('input');
let count = 0;

allInputs.forEach(function (item) {
  count++;
  item.setAttribute('placeholder', item.name);

  const labelCur = document.createElement('label');

  labelCur.classList.add('field-label');
  labelCur.setAttribute('for', count);
  labelCur.textContent = item.name;
  item.before(labelCur);
});
