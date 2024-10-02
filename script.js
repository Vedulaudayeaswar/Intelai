const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.register-link');
const registerLink = document.querySelector('.login-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.icon-close');

// Open form popup when "Login" button is clicked
btnLoginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close form popup when the close icon is clicked
closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Switch to register form
loginLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Switch back to login form
registerLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Handling login form submission
const LoginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = loginForm.email.value; // Access email directly from the form
    const password = loginForm.password.value; // Access password directly

    // Submit the form to Formspree
    fetch('https://formspree.io/f/mvgpejrw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally handle success, e.g., hide the form
        // Hide the form and display a success message
        loginForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Handling register form submission
const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = registerForm.username.value; // Access username directly
    const email = registerForm.email.value; // Access email directly
    const password = registerForm.password.value; // Access password directly

    // Submit the form to Formspree
    fetch('https://formspree.io/f/mvgpejrw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally handle success, e.g., hide the form
        registerForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});



// Handling login form submission
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Use FormData to gather form values
    const formData = new FormData(loginForm);

    // Submit the form to Formspree
    fetch('https://formspree.io/f/mvgpejrw', {
        method: 'POST',
        body: formData, // FormData automatically sets the proper encoding
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally handle success, e.g., hide the form
        loginForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});




