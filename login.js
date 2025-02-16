const loginForm = document.forms['from2'];

if (loginForm) {
    loginForm.addEventListener('submit', validateLoginForm);
}

// Login page error handling
function validateLoginForm(event) {
    let valid = true;
    event.preventDefault();
    const errorMessage = document.getElementById('error-message-login');
    errorMessage.textContent = '';

    if (loginForm.usernameinput.value === '') {
        valid = false;
        errorMessage.textContent = 'Please enter username';
        loginForm.usernameinput.classList.add('error');
        loginForm.usernameinput.style.color = 'red'; // Set the text color to red
    } else if (loginForm.passwordinput.value === '') {
        valid = false;
        errorMessage.textContent = 'Please enter your password';
        loginForm.passwordinput.classList.add('error');
        loginForm.passwordinput.style.color = 'red'; // Set the text color to red
    } else {
        loginForm.usernameinput.classList.remove('error'); // If there are no errors, remove the error class
        loginForm.passwordinput.classList.remove('error'); // If there are no errors, remove the error class
        loginForm.usernameinput.style.color = 'black'; // Restore default text color
        loginForm.passwordinput.style.color = 'black'; // Restore default text color

        window.location.href = '../index/index.html'; // After successful login, return to the home page
    }

    if (!valid) {
        event.preventDefault();
    }
}





  
  
    