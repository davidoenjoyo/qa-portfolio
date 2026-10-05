# BUG-002 — Login error messages reveal whether username or password is incorrect (user enumeration)

| Field | Value |
|---|---|
| **Reported by** | David Oenjoyo |
| **Environment** | Chrome (latest), Windows 10, https://the-internet.herokuapp.com/login |
| **Severity** | Medium |
| **Priority** | Medium |
| **Status** | New |

## Steps to Reproduce

**Scenario A — invalid username, valid-format password**
1. Open the login page
2. Enter a username that does not exist, e.g. `wronguser`
3. Enter any password, e.g. `SuperSecretPassword!`
4. Click **Login**
5. Observe the error message

**Scenario B — valid username, invalid password**
1. Open the login page
2. Enter the known valid username `tomsmith`
3. Enter an incorrect password, e.g. `WrongPassword123`
4. Click **Login**
5. Observe the error message

## Expected Result

Both scenarios should return the **same generic error message** (e.g. "Your username or password is invalid"), so an attacker cannot distinguish between "this username doesn't exist" and "this username exists but the password is wrong."

## Actual Result

The two scenarios return **different, specific messages**:
- Scenario A → `"Your username is invalid!"`
- Scenario B → `"Your password is invalid!"`

This confirms whether a given username exists in the system, independent of the password used.

## Why this matters

This is a classic **user enumeration** vulnerability. An attacker can script repeated login attempts with different usernames and use the distinct error message to build a list of valid usernames on the system, which then narrows down targets for credential-stuffing or brute-force password attacks. Severity is Medium rather than High because it does not expose credentials or grant access directly — it only aids reconnaissance for a follow-up attack.

## Suggested Fix

Return the same generic error message regardless of which field (username or password) was incorrect, and avoid timing differences between the two failure paths that could otherwise leak the same information.

## Attachments

- Scenario A screenshot: red banner reading "Your password is invalid!" after submitting valid username `tomsmith` with wrong password
- Scenario B screenshot: red banner reading "Your username is invalid!" after submitting a nonexistent username
