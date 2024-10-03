/* eslint-disable padding-line-between-statements */
'use strict';
import { setLabel, setPlaceholder } from './helpers.js';

const forms = document.querySelectorAll('form');
const firstFormInputs = [...forms[0]];
const secondFormInputs = [...forms[1]];

firstFormInputs.forEach((input) => {
  setLabel(input);
  setPlaceholder(input);
});

secondFormInputs.forEach((input) => {
  setLabel(input);
  setPlaceholder(input);
});
