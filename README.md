#### Verify ur repo
# Check commit history
git log --oneline

# Check remote connection (if added)
git remote -v

# Check status
git status

#### Daily Workflow Commands
# Check what changed
git status

# Add specific files
git add src/index.njk
# OR add all changed files
git add .

# Commit with a message
git commit -m "Describe what you changed"

# Push to GitHub (if connected to remote)
git push

#### thing 

# See what files are being tracked
git ls-files

# See differences before committing
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Create a new branch
git checkout -b feature/new-page

# Switch branches
git checkout main

# Merge a branch
git merge feature/new-page

1. Permanently Reset (Local Only)Use this if you made a mistake and want to "rewind" your branch to exactly how it was at a specific commit. Warning: This deletes all work done after that commit.To discard all changes:bash

git reset --hard <commit-hash>
