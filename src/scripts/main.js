'use strict';

const labelSignUpName = document.createElement('label');

labelSignUpName.textContent = 'Enter your name:';
labelSignUpName.setAttribute('for', 'sign-up-name');

const inputSignUpName = document.getElementById('sign-up-name');

inputSignUpName.append(labelSignUpName);

inputSignUpName.placeholder = 'Enter your name';

const labelSignUpLastName = document.createElement('label');

labelSignUpLastName.textContent = 'Enter your last name:';
labelSignUpLastName.setAttribute('for', 'sign-up-last-name');

const inputSignUpLastName = document.getElementById('sign-up-last-name');

inputSignUpLastName.append(labelSignUpLastName);

inputSignUpLastName.placeholder = 'Enter your last name';

const labelSignUpEmail = document.createElement('label');

labelSignUpEmail.textContent = 'Enter your email:';
labelSignUpEmail.setAttribute('for', 'sign-up-email');

const inputSignUpEmail = document.getElementById('sign-up-email');

inputSignUpEmail.append(labelSignUpEmail);

inputSignUpEmail.placeholder = 'Enter your password';

const labelSignUpPassword = document.createElement('label');

labelSignUpPassword.textContent = 'Enter your email:';
labelSignUpPassword.setAttribute('for', 'sign-up-password');

const inputSignUpPassword = document.getElementById('sign-up-password');

inputSignUpPassword.append(labelSignUpPassword);

inputSignUpPassword.placeholder = 'Enter your password';

const labelSignInEmail = document.createElement('label');

labelSignInEmail.textContent = 'Enter your email:';
labelSignInEmail.setAttribute('for', 'sign-in-email');

const inputSignInEmail = document.getElementById('sign-in-email');

inputSignInEmail.append(labelSignInEmail);

inputSignInEmail.placeholder = 'Enter your email';

const labelSignInPassword = document.createElement('label');

labelSignInPassword.textContent = 'Enter your password:';
labelSignInPassword.setAttribute('for', 'sign-in-password');

const inputSignInPassword = document.getElementById('sign-in-password');

inputSignInPassword.append(labelSignInPassword);

inputSignInPassword.placeholder = 'Enter your password';
