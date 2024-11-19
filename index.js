document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registration-form');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm-password');
    const submitButton = document.querySelector('#submit-btn');

   
    submitButton.disabled = true;

  
    const validatePasswords = () => {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        
        passwordInput.classList.remove('error', 'success');
        confirmPasswordInput.classList.remove('error', 'success');

        
        if (password.length < 8) {
            passwordInput.classList.add('error');
            submitButton.disabled = true;
        } else {
            passwordInput.classList.add('success');
        }

        
        if (password !== confirmPassword) {
            confirmPasswordInput.classList.add('error');
            submitButton.disabled = true;
        } else {
            confirmPasswordInput.classList.add('success');
        }

       
        if (password.length >= 8 && password === confirmPassword) {
            submitButton.disabled = false;
        }
    };

   
    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);

   
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const registrationData = {
            name: document.querySelector('#name').value,
            username: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
            password: passwordInput.value,
        };

        console.log(registrationData); 
        alert(JSON.stringify(registrationData, null, 2)); 
    });
});