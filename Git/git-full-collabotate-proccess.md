GitHub guideline

Workflow:

# Clone the repository

git clone <repository-url>
cd <repository-name>

# If is not the first time that you create branch in this repo, keep update the main branch:

git pull origin main (check you are in the main branch)

# Create a new branch

git checkout -b feature/new-feature

# Stage changes

git add .

# Commit changes

git commit -m "Add new feature"

# Push the branch to GitHub

git push origin feature/new-feature

After you push your branch, do PR:
Navigate to the repository on GitHub.
Click on "Pull requests" and then "New pull request".
Select the feature/new-feature branch and compare it to main.
Create the pull request with a description of the changes.
Collaborators review the pull request, suggest changes, and approve it.
The merge button will become active, and the pull request can be merged into the main branch by the manager.
In the main branch, git pull to keep updates.

# Update local main branch after merging the PR

git checkout main
git pull origin main

# Delete the feature branch locally (option):

git branch -d feature/new-feature

# Delete the feature branch remotely (option):

git push origin --delete feature/new-feature

Another collaborator:

After merge branch (of another collaborator) to main branch (if you already work on your branch):

# Step 1: Checkout to main branch

git checkout main

# Step 2: Pull the latest changes

git pull origin main

# Step 3: Return to your feature branch

git checkout feature/new-feature

# Step 4(option a):

Rebase your feature branch (optional but recommended)
git rebase main
Rebasing updates your branch with the latest changes from the main branch, which can help avoid merge conflicts later.

If there are conflicts during the rebase, Git will pause and allow you to resolve them. After resolving conflicts, you continue the rebase process.

# Resolve conflicts, then:

git add <resolved-files>
git rebase --continue

# Step 5 (option a):

Push updated feature branch (if rebased)
git push --force-with-lease

# Step 4(option b):

git merge main

#Resolve Conflicts (if any):
git add <resolved-file>
git commit

# Step 5 (option b):

git push origin feature/new-feature

Add Collaborators
Go to the repository page on GitHub.
Click on "Settings".
Select "Collaborators" from the sidebar.
Enter the GitHub username or email of the person you want to add as a collaborator.
Click "Add collaborator".
The collaborator will receive an invitation which they need to accept.

Branching Strategy:

Main Branch: Keep stable.
Feature Branches: feature/feature-name or bugfix/bug-description
Branch Protection: requiring pull requests and reviews before merging.
After you changed: git commit -m ‘Address feedback: <description of changes>’

PR:

smaller pull requests.
Descriptive PRs: explain what changes.
Code Reviews: ensure code quality.

Commit Messages
Meaningful Messages: Write clear and describe.
Conventional Commits: Consider using a commit message convention like Conventional Commits for consistency.
Issue Tracking
Use Issues: Track bugs, enhancements, and tasks using GitHub Issues.
Templates: Use issue templates to standardize the reporting of bugs and the proposal of features.
Labels and Milestones: Organize issues with labels and milestones to track progress and priorities.

Meetings: Hold regular meetings or check-ins to discuss progress, roadblocks, and next steps.

Create a Pull Request:
Go to GitHub, navigate to the repository, and you will see a prompt to create a pull request for the new branch.
Review and Merge:
Collaborators review the PR, suggest changes, and once approved, merge it into the main branch.

Steps to Protect the Main Branch:
Click on the "Settings" tab at the top of the repository page.
In the settings sidebar, click on "Branches".
Under "Branch protection rules", click on the "Add rule" button.
In the "Branch name pattern" field, enter main (or the name of the branch you want to protect).

Configure the Protection Settings:
Require pull request reviews before merging: Check this box to ensure that pull requests require at least one approved review before they can be merged.
Require branches to be up to date before merging: Check this box to ensure that the branch is up to date with the base branch before merging.

לפני כל פתיחת בראנצ׳ לעדכן את ה main בעזרת git pull. לבדוק שנמצאים בבראנצ׳ הנכון.
במקרה שאתה עובד על בראנצ׳ ובמקביל הבראנצ׳ המרכזי אישר PR של בראנצ׳ אחר (כלומר הבראנצ׳ התמזג לmain). כדי לעדכן את הבראנצ׳ שלך בעדכון הזה צריך לעשות pull ל main , להכנס לבראנצ שלך ולעשות git merge main.
