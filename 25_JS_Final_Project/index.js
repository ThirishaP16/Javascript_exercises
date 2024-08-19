function validationForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Define validation patterns
    const namePattern = /^[a-zA-Z ]{2,30}$/; // Alphabets and space, 2 to 30 characters
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const passwordPattern = /^.{6,}$/; // Minimum 6 characters for password

    let isValid = true;
    let errorMessage = "";

    // Validate name
    if (!namePattern.test(name)) {
        isValid = false;
        errorMessage += "Invalid name. ";
    }

    // Validate email
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Invalid email. ";
    }

    // Validate password
    if (!passwordPattern.test(password)) {
        isValid = false;
        errorMessage += "Password must be at least 6 characters. ";
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        isValid = false;
        errorMessage += "Passwords do not match. ";
    }

    // Display error message or proceed with form submission
    const errorElement = document.getElementById('error-message');
    if (!isValid) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = ""; // Clear error message
        // Normally, here you would submit the form or perform further actions
        alert('Form submitted successfully!');
        document.getElementById('validationForm').reset(); // Reset form after submission
    }
}
