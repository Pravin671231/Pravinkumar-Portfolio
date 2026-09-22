---
name: auto-pr-merge
description: Open or reuse a PR for committed feature-branch work, wait for successful CI, squash-merge, clean up the branch, synchronize the base branch, and perform required post-merge documentation updates. Use when invoked by name or when the user explicitly requests this shipping workflow.
---

# Auto PR and Merge

Invoke with `$auto-pr-merge`. Preserve the Claude skill's seven stages using Codex tools. A request to edit this skill is not a request to execute it.

## Execution Rules

- Explicit invocation authorizes the described push, PR, merge, branch cleanup, and required documentation and associated issue updates. Automatic discovery alone does not authorize external changes.
- Auto means continuous execution, not a session-mode switch or permission override. If Codex remains in Plan mode, inspect and plan only; execution requires a session mode that permits mutation.
- Read AGENTS.md and relevant repository conventions, including CLAUDE.md. Honor prior authorization without redundant confirmation.
- This skill expects committed feature work. It does not implement features or silently commit an initially dirty working tree. Documentation commits in Step 6 are the explicit exception.
- On resumption, inspect actual PR, merge, branch, and documentation state before retrying. Reuse completed work instead of creating duplicate PRs or repeating merges.

## Step 1 - Preflight

- Inspect git status, current branch, configured remote, base branch, and GitHub authentication/repository identity. Resolve ambiguous targets before mutations.
- Require a clean working tree and a feature branch. Stop and report if on the base branch, detached, or holding uncommitted work.
- Fetch current remote state and inspect commits and the diff against the remote base. If no feature work remains, report it rather than creating an empty PR.
- Push the feature branch to its verified remote if necessary, setting upstream when clear. Never force-push.

## Step 2 - Open or Reuse the PR

- Look for an existing PR for the same head and base. Reuse it rather than creating a duplicate.
- Derive the title and description from the final changes and relevant verification. Follow repository templates. Use structured tool arguments or `gh pr create --body-file` for multiline descriptions.
- In this repository, reference issues without automatic closing keywords: CLAUDE.md requires a post-merge status entry before explicit issue closure.

## Step 3 - Wait for CI

- Poll PR checks using bounded waits and meaningful progress updates. Confirm results apply to the current PR head; new commits require fresh checks.
- Require successful applicable checks before merging. Missing or skipped checks are not evidence that expected CI passed; inspect their cause and report unresolved required checks.
- Stop and report failing checks with links. Do not merge a red PR or bypass protection.

## Step 4 - Merge

- Follow repository conventions, defaulting to squash merge. Use `gh pr merge <number> --squash --delete-branch` or the corresponding available structured tool.
- Confirm merged state and record the merge SHA. If merge is rejected due to conflicts, checks, or protection, report the blocker without admin overrides.

## Step 5 - Clean Up and Synchronize

- Recheck working-tree state before switching branches. Never discard or silently stash new user changes.
- Fetch with pruning, verify remote feature-branch deletion, switch to the base, and update with `git pull --ff-only` against its verified upstream. Stop if local divergence prevents fast-forwarding.
- Remove the local feature branch with `git branch -d <branch>` if still present. A squash merge can make this refuse because ancestry differs. Leave it and report the incomplete cleanup rather than automatically forcing deletion; continue independent documentation work when safe.
- Confirm the local base matches its remote tracking branch after synchronization.

## Step 6 - Post-Merge Documentation and Issues

- Follow the repository's documented process; skip this stage if none exists.
- Here, add a Project Status entry to CLAUDE.md describing the merged work and commit and push it before explicitly closing associated issues. Close only clearly associated completed issues.
- The current repository convention permits a direct documentation commit to main. If protection requires a PR, create a small documentation branch, commit, push, verify CI, and merge through Steps 1-5. Never bypass protection.
- This stage authorizes only the required status documentation. Do not recursively generate status-update PRs for status-update PRs. If documentation publication fails, leave issue closure pending and report the partial result.

## Step 7 - Confirm

Report the PR URL and number, merge SHA, checks and their outcomes, remote/local branch cleanup, base synchronization, documentation commit or PR, and associated issue status. Distinguish completed steps from blocked steps. Do not report all steps successful merely because the feature PR merged.

## Final Flow

Preflight -> Open or reuse PR -> Verify CI -> Merge -> Clean up and synchronize -> Update documentation and issues -> Report
