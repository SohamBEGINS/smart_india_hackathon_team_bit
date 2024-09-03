document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
    } else {
        // Simple validation for demonstration purposes
        if (username === "user" && password === "password") {
            errorMessage.textContent = ""; 
            alert(`Logged in as ${userType}`);
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    }
});
