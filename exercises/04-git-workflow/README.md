# Exercise 4: Total Automation. Branch, Commit, and PR.

Now that the agent knows exactly what is failing, we will ask it to fix it following our Git workflow.

## Requirements

[GitHub CLI](https://cli.github.com/) to be able to create the Pull Request.

## Step 1: Configuration

Make sure you are on a clean branch (`git checkout -b workshop-start`).

## Step 2: The Autonomous Fix

Ask your agent:

> "I've seen that the file `demos/sourcemaps-app/src/App.tsx` has a block in the `useEffect`. Create a new branch named `fix/perf-app-lag`, fix the performance issue, commit it, create a Pull Request, and describe the change. Add a `webperf-fix` tag to the PR."

### What the agent will do:

1. Create a git branch.
2. Fix the code (e.g., by removing the unnecessary loop).
3. Perform `git commit`, `git push`, and create a PR (will require `GitHub CLI`).
4. Ask you to review the solution.

**Reflection**:

- We've gone from detecting the problem to solving it without leaving the terminal.
- We can use Pull Requests to keep a history of performance improvements.

---

In the final step, we will see how to perform deep analysis directly on the code.
