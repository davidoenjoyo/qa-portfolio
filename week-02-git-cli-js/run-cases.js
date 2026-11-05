const { validateUsername, validatePassword } = require("./validators");

const usernameCases = [
  { name: "TC-001 empty",   input: "",   expected: "Username is required" },
  { name: "TC-003 2 chars", input: "dc", expected: "Username must be at least 3 characters" },
  { name: "TC-004 3 chars", input: "dcv", expected: null },
  { name: "TC-005 20 chars", input: "abcdefghij1234567890", expected: null },
  { name: "TC-006 21 chars", input: "abcdefghij12345678901", expected: "Username must be 20 characters or fewer" },
  { name: "TC-004 8 chars", input: "dcv34523", expected: null },
  
];

const passwordCases = [
  { name: "TC-007 empty",   input: "",        expected: "Password is required" },
  { name: "TC-009 7 chars", input: "Pass1rd", expected: "Password must be at least 8 characters" },
  { name: "TC-010 8 chars", input: "Pass1rdd", expected: null },
  { name: "TC-011 20 chars", input: "Passw0rd1234567890AB", expected: null },
  { name: "TC-012 21 chars", input: "Passw0rd1234567890AB1", expected: "Password must be 20 characters or fewer" },
  { name: "TC-009 9 chars", input: "Pass1rd23", expected: null },
  
];

function run(label, validator, cases) {
  for (const c of cases) {
    const result = validator(c.input);
    const status = result === c.expected ? "PASS" : "FAIL";
    console.log(`${status} - ${label} - ${c.name}`);
  }
}

run("username", validateUsername, usernameCases);
run("password", validatePassword, passwordCases);