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

console.log(validateUsername(""));
console.log(validateUsername("dc"));
console.log(validateUsername("dvd"));
console.log(validateUsername("abcdefghij1234567890"));
console.log(validateUsername("abcdefghij12345678901"));

console.log(validatePassword(""));
console.log(validatePassword("Pass1rd"));
console.log(validatePassword("Passw0rd"));
console.log(validatePassword("Passw0rd1234567890AB"));
console.log(validatePassword("Passw0rd1234567890ABC"));