const downloadAction = document.querySelectorAll('.download-btn');
const responseBtn = document.querySelector('.btn1');
const responseBtn2 = document.querySelector('.btn2');
const responseBtn3 = document.querySelector('.btn3');
const responseBtn4 = document.querySelector('.btn4');
const responseBtn5 = document.querySelector('.btn5');
const responseSection = document.getElementById('response1');
const faqContainer = document.querySelector('.faq-holder');
const faqResponse = document.querySelector('.faq-response');
const faq1 = document.querySelector('.q1');
const faq2 = document.querySelector('.q2');
const faq3 = document.querySelector('.q3');
const faq4 = document.querySelector('.q4');
const faq5 = document.querySelector('.q5');

console.log (responseBtn);
function displayResponse(){
    const response = document.createElement('li');
    response.classList.toggle('faq-response');
    faq1.appendChild(response);
    response.innerHTML = `<p>With Leonardo smart assistant, help is always within reach across all of your compatible smart devices from your phone, Wear OS watch, tablet, laptop or desktop, smart display, Google TV, and even just using your voice by saying "LEO" to get help from Leonardo smart assistant.
<br>  Set up helpful routines to automate your home to get automatic help from your home.</p>`;
}

function displayResponse2(){
    const response = document.createElement('li');
    response.classList.toggle('faq-response');
    faq2.appendChild(response);
    response.innerHTML = `<p>It’s easy to get started with Leonardo:</p>
<ol>
<li>Download the Leonardo app to your phone.</li>
<li>Use Bluetooth to find and connect your compatible devices.</li>
<li>Start customizing your environment when you’re home and managing your devices while you’re away.</li>
</ol>
<p>For more information, please refer to the How To section on this page.</p>`;
}

function displayResponse3(){
    const response = document.createElement('li');
    response.classList.toggle('faq-response');
    faq3.appendChild(response);
    response.innerHTML = `<p>Leonardo smart device works with all of your favorite devices , as well as over 80,000 compatible Works with Leonardo smart devices from your other favorite brands. <br> Additionally, the new standard for smart home devices, Matter, was designed around the vision of making all Matter-enabled devices compatible with one another. <br> Because Leonardo smart device supports Matter, as more smart home device makers adopt this technology, your smart home will automatically be compatible with them as they become available.`;
}
function displayResponse4(){
    const response = document.createElement('li');
    response.classList.toggle('faq-response');
    faq4.appendChild(response);
    response.innerHTML = `<p>Smart home industry leaders(from platforms like Leonardo, Google Home, Apple Homekit, Amazon Alexa, and Samsung SmartThings to smart device makers like Philips Hue, August Home, Nanoleaf, TP-Link, and hundreds more), have all partnered together to create a new, single technology for smart home devices. This ensures they can all easily speak to one another and can be controlled from any Matter-certified smart home platform.<br>To add Matter to Leonardo smart device, or any other smart home platform, simply add a device that acts as a Matter hub with the smart home platform you are using.6 After adding a device that works as a hub for Matter, you will be able to easily set up Matter devices, and control them remotely when away from home.</p>`
}
function displayResponse5(){
    const response = document.createElement('li');
    response.classList.toggle('faq-response');
    faq5.appendChild(response);
    response.innerHTML = `<p>Yes. No matter which family member sets up Google Home, all members of the family will be able to control your smart devices via the app, personalized routines, or even simply by using their voice.<br>Additionally, if you would like to limit access for certain household members or guests, the Limited Access feature in the Google Home app lets you customize how much access to allow for different members of your household or guests, and what level of information Google Home should share.</p>`
}
responseBtn.addEventListener('click', displayResponse);
responseBtn2.addEventListener('click', displayResponse2);
responseBtn3.addEventListener('click', displayResponse3);
responseBtn4.addEventListener('click', displayResponse4);
responseBtn5.addEventListener('click', displayResponse5);
console.log(downloadAction);

const faqBtn = document.querySelector('.response');

