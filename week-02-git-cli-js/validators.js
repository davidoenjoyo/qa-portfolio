function validateUsername(username) {
  if (username.length === 0) return "Username is required";
  if (username.length < 3) return "Username must be at least 3 characters";
  if (username.length > 20) return "Username must be 20 characters or fewer";
  return null;
}

function validatePassword(password) {
  if (password.length === 0) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  if (password.length > 20) return "Password must be 20 characters or fewer";
  return null;
}

module.exports = { validateUsername, validatePassword };