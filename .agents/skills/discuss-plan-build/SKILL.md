---
name: discuss-plan-build
description: Discuss and confirm requirements, prepare and approve a plan in Codex Plan mode, choose Auto or Manual execution, then implement and verify with a live task checklist. Use when invoked by name or when the user requests this approval-based implementation workflow.
---

# Discuss, Plan, Build

Invoke with `$discuss-plan-build` followed by the task. Follow the Claude workflow's stages using available Codex controls. This is an implementation workflow, not an instruction to modify this skill when the user merely invokes it.

## Workflow State

Track the current stage, confirmed requirements, approved plan, execution preference, and task status across turns. Honor confirmations and preferences already provided; do not restart the workflow or ask for the same approval again. A new question or correction normally steers the current task. Reconfirm only material changes to agreed scope or the plan.

Codex Plan mode is a session mode. Auto and Manual below are workflow pacing preferences, not session modes or tool-permission settings. Higher-priority session instructions and the user's explicit instructions take precedence over this skill.

## Step 1 - Ask / Discuss

- Clarify the goal, scope, expected behavior, material constraints, and dependencies.
- Inspect relevant files to resolve discoverable facts before asking questions. Keep early exploration proportionate to the task.
- Do not implement or write a plan file yet.

## Step 2 - Requirement Confirmation

- Summarize the agreed requirements as a short, concrete list and obtain explicit confirmation.
- If the user adds material requirements, incorporate them and confirm the revised scope.
- Do not ask again if the requirements have already been explicitly confirmed.

## Step 3 - Plan Mode and Plan Creation

1. Require actual Codex Plan mode before preparing the implementation plan. If already active, continue. Otherwise use a mode-switch control only if actually available and authorized. If unavailable, ask the user to enable Plan mode in their Codex interface and wait for the session to indicate it is active. Do not claim that a message or skill can switch modes.
2. Read applicable AGENTS.md instructions, relevant repository conventions including CLAUDE.md where applicable, and the code needed to make the plan decision complete. Follow the project's spec, issue, and branch conventions when relevant. Do not require Claude's Explore agent or unavailable tools.
3. Prepare a step-by-step plan covering implementation, testing, verification, assumptions, and relevant failure cases. Scale detail to the task. Use Codex's plan presentation in chat; do not create a repository plan file while Plan mode prohibits writes.

## Step 4 - Plan Confirmation

- Present the complete plan in a `<proposed_plan>` block when required by the active Codex Plan mode instructions. Do not call Claude's EnterPlanMode or ExitPlanMode tools.
- Wait for explicit approval. If changes are requested, revise and present the complete replacement plan for approval.
- Plan approval does not itself change the session mode. Never execute mutations while the session remains in Plan mode.

## Step 4.5 - Task List and Execution Preference

- After plan approval, show an ordered checklist of concrete deliverables, initially Pending.
- Ask once for Auto or Manual unless the user already selected one. Auto executes all approved tasks continuously; Manual pauses after each completed task for explicit go-ahead.
- Use an available question tool only when its usage rules permit the question. For required approvals or when no suitable tool is available, ask in plain chat. Do not call Claude's AskUserQuestion.
- An unanswered question, elapsed time, or dismissed dialog is not approval. Explicitly saying to skip the mode choice or proceed automatically selects Auto; an ambiguous rejection requires clarification.
- Before implementation, require a session mode that permits execution. If still in Plan mode, ask the user to switch out of it. Keep the approved plan and execution preference so they need not be confirmed again.

## Task Progress Rule

Show and maintain an ordered checklist with specific task names and the states Pending, In Progress, and Completed. For example:

- Completed: Update case-study fields in the display component.
- In Progress: Run TypeScript verification for the changed component.
- Pending: Check the case-study page rendering.

Execute in the approved order unless evidence requires an adjustment. Mark a task Completed only after its relevant verification succeeds. Preserve completed statuses unless actual rework is needed. Explain material deviations and resolve scope changes before proceeding.

## Step 5 - Execution

In Auto, carry out the approved tasks and checks continuously without per-task approval. In Manual, complete and verify one task, update the checklist, then wait for explicit permission to start the next.

Honor session permissions in either preference. Pause for genuine blockers, missing required information, or additional actions outside the approved scope. A skill does not grant access beyond the session's permissions. Commit, push, merge, deploy, and external messaging require authorization covering those actions; do not infer it solely from permission to implement.

Run checks appropriate to the work. Report a failed or unavailable check accurately and keep affected tasks incomplete until resolved. Do not claim success merely because the implementation was written.

## Step 6 - Completion

Summarize what changed, what was verified and its results, and any remaining work or limitations. Link relevant artifacts when useful.

## Final Flow

Discuss -> Confirm requirements -> Enable Plan mode -> Prepare plan -> Approve plan -> Show tasks and choose Auto/Manual -> Leave Plan mode -> Execute and verify -> Completion
