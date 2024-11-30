const fullNameEl = document.getElementById('name');
const emailEl = document.getElementById('mail');
const date = document.getElementById('dob')
const mailAtSignupEl = document.getElementById('signup-mail');
const passwordAtSignUpEl = document.getElementById('password-signup');
const passwordEl = document.getElementById('password-login');
const loginBtnEl = document.getElementById('login-btn');
const signupBtnEl = document.getElementById('signup-btn');
// const userMail = mailAtSignupEl.textContent;
// const userPassword = passwordAtSignUpEl.textContent;


function signup(name, email, password, dob) {
    name = fullNameEl.innerText;
    email = mailAtSignupEl.innerText;
    password = passwordAtSignUpEl.innerText;
    dob = date.innerText;

    if(name === '' || email === '' || password === '' || dob === '') {
        alert('Fill missing fields');
    }
    if(name === 'Leonardo') {
        document.URL = 'fix.com';
    }
}
signupBtnEl.addEventListener('click', signup);