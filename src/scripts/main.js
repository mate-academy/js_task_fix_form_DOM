'use strict';

const inputs = [...document.querySelectorAll('input')];

const labels = inputs.map(x => `
<label 
  class="field-label"
  for="${x.id}"
>${x.name}
</label>
`);

for (let i = 0; i < inputs.length; i++) {
  inputs[i].insertAdjacentHTML('beforebegin', labels[i]);
}
