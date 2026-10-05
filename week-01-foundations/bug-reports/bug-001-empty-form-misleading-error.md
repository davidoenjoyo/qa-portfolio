# BUG-001 — Empty required fields are reported as "invalid" instead of "required"

| Field | Value |
|---|---|
| **Reported by** | David Oenjoyo |
| **Environment** | Chrome (latest), Windows 10, https://the-internet.herokuapp.com/login |
| **Severity** | Low |
| **Priority** | Low |
| **Status** | New |

## Steps to Reproduce

**Scenario A — both fields empty**
1. Open the login page
2. Leave **Username** and **Password** empty
3. Click **Login**

**Scenario B — username empty, password filled**
1. Open the login page
2. Leave **Username** empty, enter `SuperSecretPassword!` as the password
3. Click **Login**

**Scenario C — password empty, username filled**
1. Open the login page
2. Enter `tomsmith` as the username, leave **Password** empty
3. Click **Login**

## Expected Result

Either the **Login** button is disabled until the required fields are filled, or the form blocks submission and shows a clear message such as "Username is required" / "Password is required."

## Actual Result

The **Login** button is active and the empty form is submitted to the server. The page reloads with a red banner that treats the empty field as an incorrect value:

| Scenario | Message shown |
|---|---|
| A — both empty | "Your username is invalid!" |
| B — username empty | "Your username is invalid!" |
| C — password empty | "Your password is invalid!" |

No scenario tells the user that a field was simply left blank.

## Why this matters

An empty field is not the same as an invalid value. A user who forgot to type something is told it is "invalid", which suggests they entered something wrong and makes the problem harder to understand. There is also no client-side validation, so every empty submission costs a full server round trip. Severity is Low because no data or security is affected; it is a usability issue only.

## Attachments

- Screenshots of the red banner for each scenario
