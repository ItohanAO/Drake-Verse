function validateLogin() {
    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password123") {
        alert("Login successful! Redirecting to the home page...");
        window.location.href = "artistpage.html"; // Redirect to the home page
        return false; // Prevent default form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent default form submission
    }
}