document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve and trim values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation tracking
    let isValid = true;
    const messages = [];

    // Username validation: min length 3
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation: must include "@" and "."
    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation: min length 8
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Show feedback
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";  // greenish
      feedbackDiv.style.backgroundColor = ""; // optional, or set your success bg
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";  // red
      feedbackDiv.style.backgroundColor = ""; // keep your existing bg style
    }
  });
});
