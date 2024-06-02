// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(event.target);

    // Example of form validation (you can expand this)
    const password = formData.get('password');
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Mock form submission (you can replace this with actual API call)
    console.log('Form Submitted', Object.fromEntries(formData));

    // Display success message or redirect to another page
    alert('Registration successful!');
    event.target.reset(); // Reset the form
});
