// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(event.target);

    // Check for KTP ending with 9999
    const ktp = formData.get('ktp');
    if (ktp.endsWith('9999')) {
        showPopup('popup-error');
        return;
    }

    // Example of form validation (you can expand this)
    const password = formData.get('password');
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Mock form submission (you can replace this with actual API call)
    console.log('Form Submitted', Object.fromEntries(formData));

    // Display success message or redirect to another page
    showPopup('popup-success');
    event.target.reset(); // Reset the form
});

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    const span = popup.getElementsByClassName('close')[0];

    popup.style.display = 'block';

    span.onclick = function() {
        popup.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
}
