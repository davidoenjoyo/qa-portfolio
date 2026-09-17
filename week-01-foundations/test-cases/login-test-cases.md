# Login Form — Test Cases

Spec assumptions: see [../README.md](../README.md#feature-under-test-login-form).

## A. Equivalence Partitioning & Boundary Value Analysis — Username

| ID | Title | Steps | Test Data | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-001 | Login fails when username is empty | Leave username blank, fill valid password, submit | `""` | Error: "Username is required"; form not submitted | High |
| TC-002 | Login succeeds with a valid mid-range username | Fill valid username, valid password, submit | `davidc123` (9 chars) | Login succeeds | High |
| TC-003 | Username rejected below minimum length | Fill username with 2 characters | `dc` (2 chars) | Error: "Username must be at least 3 characters" | Medium |
| TC-004 | Username accepted at exact minimum length | Fill username with 3 characters | `dvd` (3 chars) | Accepted, no length error | Medium |
| TC-005 | Username accepted at exact maximum length | Fill username with 20 characters | `abcdefghij1234567890` (20 chars) | Accepted, no length error | Medium |
| TC-006 | Username rejected above maximum length | Fill username with 21 characters | `abcdefghij12345678901` (21 chars) | Error: "Username must be 20 characters or fewer" | Medium |

## B. Equivalence Partitioning & Boundary Value Analysis — Password

| ID | Title | Steps | Test Data | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-007 | Login fails when password is empty | Fill valid username, leave password blank, submit | `""` | Error: "Password is required"; form not submitted | High |
| TC-008 | Login succeeds with a valid mid-range password | Fill valid username, valid password, submit | `Passw0rd12` (10 chars) | Login succeeds | High |
| TC-009 | Password rejected below minimum length | Fill password with 7 characters | `Pass1rd` (7 chars) | Error: "Password must be at least 8 characters" | Medium |
| TC-010 | Password accepted at exact minimum length | Fill password with 8 characters | `Passw0rd` (8 chars) | Accepted, no length error | Medium |
| TC-011 | Password accepted at exact maximum length | Fill password with 20 characters | `Passw0rd1234567890AB` (20 chars) | Accepted, no length error | Medium |
| TC-012 | Password rejected above maximum length | Fill password with 21 characters | `Passw0rd1234567890ABC` (21 chars) | Error: "Password must be 20 characters or fewer" | Medium |

## C. Decision Table — Username × Password Validity

| ID | Title | Username | Password | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-013 | Login succeeds with valid username and valid password | Valid | Valid | Redirected to dashboard/home page | High |
| TC-014 | Login fails with valid username and invalid password | Valid | Invalid | Error message shown; user remains on login page | High |
| TC-015 | Login fails with invalid username and valid-format password | Invalid | Valid | Error message shown; user remains on login page | High |
| TC-016 | Login fails with both username and password invalid | Invalid | Invalid | Generic error shown (does not reveal which field was wrong); user remains on login page | High |

## D. Supplementary Functional & Security Checks

| ID | Title | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-017 | Submit button disabled when both fields are empty | Load login page, do not fill any field | Submit button is disabled/non-clickable | Low |
| TC-018 | Password field masks input | Type into password field | Characters shown as dots/asterisks, not plain text | Medium |
| TC-019 | "Remember me" keeps session after browser restart | Check "Remember me", log in, close and reopen browser | User is still logged in | Low |
| TC-020 | SQL injection string in username is safely rejected | Enter `' OR '1'='1` as username, any password, submit | Login fails with standard invalid-credentials error; no database error exposed, no unauthorized login | High |

---

**Breakdown:** 6 EP/BVA (username) + 6 EP/BVA (password) + 4 decision table + 4 supplementary = **20 test cases**.
