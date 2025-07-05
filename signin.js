function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
}

// Handle Login Form Submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;

  if (username.trim() !== "" && password.trim() !== "") {
    // ✅ Successful Login Simulation
    window.location.href = "index.html";
  } else {
    alert("Please enter both username and password.");
  }
});

// Handle Sign Up Form Submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = this.querySelector('input[placeholder="Username"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;

  if (username.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
    // ✅ Successful Signup Simulation
    window.location.href = "login.html";
  } else {
    alert("Please fill out all fields.");
  }
});
