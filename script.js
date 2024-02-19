document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can add authentication logic here
    // For simplicity, let's just redirect to a index page
    window.location.href = "index.html";
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Hardcoded username and password for demonstration purposes
    const hardcodedUsername = "user";
    const hardcodedPassword = "password";

    const usernameInput = document.getElementById("vanshika").value;
    const passwordInput = document.getElementById("verma@123").value;

    if (usernameInput === hardcodedUsername && passwordInput === hardcodedPassword) {
        // Authentication successful, redirect to the index
        window.location.href = "index.html";
    } else {
        // Authentication failed, display an error message (you can customize this part)
        alert("Invalid credentials. Please try again.");
    }
});

// Update script.js with the following code
document.getElementById("logoutButton").addEventListener("click", function() {
    // Redirect to the login page upon logout
    window.location.href = "login.html";
});
