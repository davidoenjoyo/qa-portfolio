# Week 2 — Git, CLI & JavaScript Basics

## Goal

Turn the Week 1 login form rules into code and verify them with automated tests, while practising the Git workflow used in real teams (branch, commit, pull request).

## What's inside

| File | Purpose |
|---|---|
| `validators.js` | `validateUsername` and `validatePassword`, implementing the Week 1 spec |
| `validators.test.js` | 12 data-driven tests built from TC-001 to TC-012 (equivalence partitioning and boundary values) |
| `run-cases.js` | Simple script that prints PASS/FAIL for the same cases |
| `notes/cli-cheatsheet.md` | CLI commands I use most |

## Run the tests

Requires Node.js 20 or newer.

    npm test

## What I learned

- Boundary value tests catch off-by-one bugs: changing `< 8` to `<= 8` made the 8-character password case fail.
- Data-driven tests keep the logic in one place and the cases in a table.
- Working on a branch and merging through a pull request keeps `main` clean.