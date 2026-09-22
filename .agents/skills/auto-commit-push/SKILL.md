---
name: auto-commit-push
description: Stage relevant existing changes, create a new commit, and push the current branch continuously. Use when invoked by name or when the user asks to commit and push without intermediate confirmation.
---

# Auto Commit and Push

Invoke with `$auto-commit-push`. This workflow preserves the Claude skill's three steps using Codex tools. A request to edit this skill is not a request to execute it.

## Execution Rules

- An explicit invocation or equivalent request authorizes committing and pushing the relevant existing work. Automatic skill discovery alone does not authorize mutations.
- Auto means continuous execution without redundant confirmation, not a session-mode switch or permission override. If Codex is in Plan mode, limit work to inspection and a plan; wait for a session mode that permits execution.
- Follow AGENTS.md and applicable repository conventions. Preserve unrelated user changes. Resolve a genuinely ambiguous commit scope or remote before mutation.
- Track completed steps across turns. After an interrupted push, inspect the actual commit and remote state before retrying; do not create a duplicate commit.

## Step 1 - Commit the Required Changes

1. Inspect `git status`, `git diff`, `git diff --cached`, and `git log --oneline -5`. Also inspect the branch and configured remote/upstream before creating a commit. Resolve detached HEAD or an ambiguous target first.
2. If no relevant changes exist, report that there is nothing to commit. Do not continue to push unrelated work.
3. Stage relevant files by name. Inspect the resulting staged diff, including previously staged changes; do not sweep in unrelated or sensitive files or silently unstage someone else's work.
4. Perform required repository checks appropriate to the change. Create a new commit with a concise message matching repository convention. Never amend or skip hooks. If a hook fails, fix only within the authorized scope and retry with a normal new commit, or report the blocker.

## Step 2 - Push the Current Branch

- Determine the branch with `git branch --show-current` and push to its verified upstream. If none exists, use `git push -u <remote> <branch>` only when the intended remote and branch are clear.
- Never force-push. If rejected, report the reason without rewriting history or silently rebasing.
- For sandbox or network restrictions, use the session's escalation mechanism when available; do not bypass it. If blocked, report whether the commit exists locally and whether pushing remains incomplete.

## Step 3 - Confirm

Verify the push result, local HEAD, and destination remote branch tip. Report commit SHA and message, branch and remote, push outcome, checks performed, and any remaining working changes. A local commit alone does not prove the push succeeded.

## Final Flow

Inspect -> Stage relevant changes -> Check and commit -> Push -> Verify and report
