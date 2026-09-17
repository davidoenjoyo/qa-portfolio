# BUG-001 — No client-side validation error when password is below minimum length

| Field | Value |
|---|---|
| **Reported by** | David Cullend |
| **Environment** | Chrome (latest), Windows 10, login form under test |
| **Severity** | Medium |
| **Priority** | Medium |
| **Status** | New |

## Steps to Reproduce

1. Open the login page
2. Enter a valid username
3. Enter a password shorter than the minimum length, e.g. `abc12` (5 characters)
4. Click the **Login** button

## Expected Result

The form should block submission client-side and show an inline error: *"Password must be at least 8 characters."*

## Actual Result

The form submits to the server, which returns a generic error: *"Login failed."* No indication is given to the user that the password does not meet the length requirement — it looks identical to a wrong-password error, making it hard for a legitimate user to understand what went wrong.

## Why this matters

Without a specific client-side message, users who mistype or truncate their password get the same generic failure as users with genuinely wrong credentials, increasing support/confusion cost. This does not affect security (server-side validation is still present, which is correct), only usability — hence Medium rather than High severity.

## Attachments

*(Screenshot/screen recording would go here — attach when reproducing this against a real target.)*
