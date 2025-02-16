const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const firstForm = document.getElementById("from1");
const secondForm = document.getElementById("from2");
const container = document.querySelector(".container");
const errorMessageRegister = document.getElementById("error-message-register");

signinBtn.addEventListener("click", ()=>{
container.classList.remove("right-panel-active")
})

signupBtn.addEventListener("click",()=>{
container.classList.add("right-panel-active")
})

firstForm.addEventListener("submit",(e)=> e.preventDefault()) 
secondForm.addEventListener("submit",(e) => e.preventDefault())

document.addEventListener("DOMContentLoaded", function() {
    // Get Reset Button Element
    const resetButton = document.getElementById("resetButton");

    // Obtain registration form elements
    const registerForm = document.getElementById("from1");

    // Add a click event handler for the reset button
    resetButton.addEventListener("click", function() {
        // Reset Form Fields
        registerForm.reset();
    });
});


const form = document.forms['from1'];

if (form) {
    form.addEventListener('submit', validateForm);
    form.addEventListener('reset', clearForm);
}

// Registration page error handling
function validateForm(event) {
    let valid = true;
    event.preventDefault();
    const errorMessage = document.getElementById('error-message-register');
    errorMessage.textContent = '';

    if (form.usernameinput.value === '') {
        valid = false;
        errorMessage.textContent = 'Please enter username';
        form.usernameinput.classList.add('error-message');
        form.usernameinput.style.color = 'red'; // Set the text color to red
    } else if (form.emailinput.value === '') {
        valid = false;
        errorMessage.textContent = 'Please enter Email';
        form.emailinput.classList.add('error-message');
        form.emailinput.style.color = 'red'; // Set the text color to red
    } else if (form.passwordinput.value === '') {
        valid = false;
        errorMessage.textContent = 'Please enter password';
        form.passwordinput.classList.add('error-message');
        form.passwordinput.style.color = 'red'; // Set the text color to red
    } else if (form.confirmpasswordinput.value === '') {
        valid = false;
        errorMessage.textContent = 'Please enter confirm password';
        form.confirmpasswordinput.classList.add('error-message');
        form.confirmpasswordinput.style.color = 'red'; // Set the text color to red
    } else if (form.passwordinput.value !== form.confirmpasswordinput.value) {
        valid = false;
        errorMessage.textContent = 'Passwords do not match';
        form.confirmpasswordinput.classList.add('error-message');
        form.confirmpasswordinput.style.color = 'red'; // Set the text color to red
    } else if (!isPasswordValid(form.passwordinput.value)) {
        valid = false;
        errorMessage.textContent = 'Password does not meet requirements';
        form.passwordinput.classList.add('error-message');
        form.passwordinput.style.color = 'red'; // Set the text color to red
    } else {
        form.usernameinput.classList.remove('error-message'); // If there are no errors, remove the error class
        form.emailinput.classList.remove('error-message'); // If there are no errors, remove the error class
        form.passwordinput.classList.remove('error-message'); // If there are no errors, remove the error class
        form.confirmpasswordinput.classList.remove('error-message'); // If there are no errors, remove the error class
        
        alert('Successfully registered!');//After successful registration, the webpage will pop up
        container.classList.remove("right-panel-active");//After successful registration, jump to the login form
    
    }

    if (!valid) {
        event.preventDefault();
    }
}


function clearForm() {
    const errorMessage = document.getElementById('error-message-register');
    errorMessage.textContent = '';
}

function isPasswordValid(password) {
    // The password must contain at least one number, one lowercase letter, one uppercase letter, and one symbol, and must have at least 8 characters
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordRegex.test(password);
}








/* light dark mode swtich */
function changeMode(){    
    var element = document.body;
    element.classList.toggle("dark-mode");
}
