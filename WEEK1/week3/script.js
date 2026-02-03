function loginUser(username, password) {
  if (!username) {
    return alert("Username required");
  }

  if (!password) {
    return alert("Password required");
  }

  if (username === "admin" && password === "1234") {
    return alert("Admin Login Successful");
  }

  return alert("User Login Successful");
}
function getDisplayName(user) {
  return user.displayName || user.username || "Anonymous";
}

function handleLogin(e) {
  e.preventDefault(); // stops refresh

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  loginUser(username, password);
}
