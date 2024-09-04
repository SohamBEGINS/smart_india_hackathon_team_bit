document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    const errorMessage = document.getElementById('errorMessage');
    const crew = document.getElementById('crew').innerHTML;
    const passenger = document.getElementById('passenger').innerHTML;

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
    } else {
        // Simple validation for demonstration purposes
        if (username === "user" && password === "password") {
              // Redirect to another page if credentials are correct
              console.log(crew);
              console.log(passenger);
              console.log(typeof(crew));
              console.log(typeof(passenger));
              if(passenger=='Passenger')
              window.location.href = 'MainPage.html';
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    }
});
