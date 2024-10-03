'use strict';
import { setLabel, setPlaceholder } from './helpers.js';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  setLabel(input);
  setPlaceholder(input);
});
