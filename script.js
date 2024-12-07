const signUpButton = document.getElementById('signUpButton'); // Correctly references the Sign-Up button
const signInButton = document.getElementById('signInButton'); // Correctly references the Sign-In button
const signInForm = document.getElementById('signInForm'); // Correctly references the Sign-In form
const signUpForm = document.getElementById('signUpForm'); // Correctly references the Sign-Up form

// Ensure the elements exist before adding event listeners
if (signUpButton && signInButton && signInForm && signUpForm) {
    // Show the Sign-Up form and hide the Sign-In form when clicking the Sign-Up button
    signUpButton.addEventListener('click', function () {
        signInForm.style.display = "none"; // Hide the Sign-In form
        signUpForm.style.display = "block"; // Show the Sign-Up form
    });

    // Show the Sign-In form and hide the Sign-Up form when clicking the Sign-In button
    signInButton.addEventListener('click', function () {
        signInForm.style.display = "block"; // Show the Sign-In form
        signUpForm.style.display = "none"; // Hide the Sign-Up form
    });
} else {
    console.error('One or more elements are missing. Check the IDs in your HTML and JavaScript.');
}
