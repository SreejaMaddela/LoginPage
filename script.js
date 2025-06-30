const form = document.getElementById('loginForm');
const message = document.getElementById('message');
const userList = document.getElementById('users');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minLength = 6;

  if (!emailRegex.test(email)) {
    message.textContent = "Invalid email format.";
    return;
  }

  if (password.length < minLength) {
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  const li = document.createElement('li');
  li.textContent = email;
  userList.appendChild(li);

  message.style.color = "green";
  message.textContent = "Login successful! User added.";

  form.reset();
});
