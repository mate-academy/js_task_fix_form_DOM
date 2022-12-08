'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(inp => {
  inp.insertAdjacentHTML('beforeBegin',
    `<label
      type="text"
      for="${inp.id}"
      name=""
    >

      <strong>${`
        ${((inp.name !== 'firstName')
      && (inp.name !== 'lastName')) ? inp.name.toUpperCase() : ''}
        ${inp.name === 'firstName' ? 'FIRST NAME' : ''}
        ${inp.name === 'lastName' ? 'LAST NAME' : ''}
      `}</strong>
    </label>`);

  inp.setAttribute('placeholder', `${((inp.name !== 'firstName')
    && (inp.name !== 'lastName'))
    ? inp.name.toUpperCase() : ''}`
    + `${inp.name === 'firstName' ? 'FIRST NAME' : ''}`
    + `${inp.name === 'lastName' ? 'LAST NAME' : ''}`
  );
});
