// Query selectors for elements
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.register-link');
const registerLink = document.querySelector('.login-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.icon-close');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation a');

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

    const formData = new FormData(registerForm);

    // Submit the form to Formspree
    fetch('https://formspree.io/f/mvgpejrw', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        registerForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Toggle navigation menu on mobile view
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Close the navigation menu after clicking on a navigation link (for mobile view)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
    });
});
