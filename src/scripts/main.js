'use strict';

// write code here

const list = document.querySelectorAll('form');

for (let i = 0; i < list.length; i++) {
  for (let y = 0; y < list[i].length; y++) {
    list[i][y].placeholder
    = list[i][y].name.charAt(0).toUpperCase()
    + list[i][y].name.substr(1);
  }
}

const list2 = document.querySelectorAll('div.field');

const label = document.createElement('label');

label.className = 'field-label';
label.htmlFor = list[0][0].id;
label.textContent = list[0][0].name;
list2[0].append(label);

const label2 = document.createElement('label');

label2.className = 'field-label';
label2.htmlFor = list[0][1].id;
label2.textContent = list[0][1].name;
list2[1].append(label2);

const label3 = document.createElement('label');

label3.className = 'field-label';
label3.htmlFor = list[0][2].id;
label3.textContent = list[0][2].name;
list2[2].append(label3);

const label4 = document.createElement('label');

label4.className = 'field-label';
label4.htmlFor = list[0][2].id;
label4.textContent = list[0][2].name;
list2[3].append(label4);

const label5 = document.createElement('label');

label5.className = 'field-label';
label5.htmlFor = list[1][0].id;
label5.textContent = list[1][0].name;
list2[4].append(label5);

const label6 = document.createElement('label');

label6.className = 'field-label';
label6.htmlFor = list[1][1].id;
label6.textContent = list[1][1].name;
list2[5].append(label6);
