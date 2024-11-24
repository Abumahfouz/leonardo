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

function login (thisEmail, thisPassword){
    thisEmail = emailEl.textContent;
    thisPassword = passwordEl.textContent;
    if (thisPassword !== 'password' || thisEmail !== 'john@gmail.com') {
        alert('Invalid Credentials!');
        document.URL('../pages/notfound.html');
    }
    else if(thisPassword == '' || thisEmail == '') {
        alert('Enter your credentials');
    }
    else {
        document.URL('../pages/index.html');
    }
    if (!passwordEl.contains('1')|| !passwordEl.contains('2')) {
        alert('Weak Password');
    }
}
loginBtnEl.addEventListener('click', login);
