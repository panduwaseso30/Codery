const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

document.querySelectorAll(".cd-toggle-password").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    if (!input) return;

    input.type = input.type === "password" ? "text" : "password";
    button.classList.toggle("active", input.type === "text");
  });
});

if (registerForm) {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const passwordHint = document.getElementById("passwordHint");
  const confirmPasswordHint = document.getElementById("confirmPasswordHint");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    passwordHint.textContent = "";
    confirmPasswordHint.textContent = "";
    passwordHint.classList.remove("invalid");
    confirmPasswordHint.classList.remove("invalid");

    let isValid = true;

    if (passwordInput.value.length < 8) {
      passwordHint.textContent = "Password minimal 8 karakter.";
      passwordHint.classList.add("invalid");
      isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordHint.textContent =
        "Confirm password harus sama dengan password.";
      confirmPasswordHint.classList.add("invalid");
      isValid = false;
    }

    if (!isValid) return;

    window.location.href = "login.html";
  });
}

if (loginForm) {
  const loginPasswordInput = document.getElementById("loginPassword");
  const loginPasswordHint = document.getElementById("loginPasswordHint");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    loginPasswordHint.textContent = "";
    loginPasswordHint.classList.remove("invalid");

    if (loginPasswordInput.value.length < 8) {
      loginPasswordHint.textContent = "Password minimal 8 karakter.";
      loginPasswordHint.classList.add("invalid");
      return;
    }

    alert("Login berhasil.");
  });
}
