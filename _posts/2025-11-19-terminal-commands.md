---
layout: post
title: "Essential Terminal Commands for Technical Writers"
date: 2025-11-19
categories: reviews
---

**For many technical writers, the Terminal is less a developer’s playground and more a quiet backstage where documentation gets built, tested, organized, and delivered. Knowing a handful of essential commands can improve your workflow, help you navigate large repos with confidence, and make it easier to collaborate with engineers. Below is a curated list of the most commonly used Terminal commands that support writing, editing, building, and maintaining modern documentation.

---

## 1. Navigation and File Management

**`pwd`**  
Prints the directory you’re currently in.

**`ls`**  
Lists files and folders.

**`cd <folder>`**  
Moves into a directory.

**`cd ..`**  
Moves up one folder.

**`mkdir <name>`**  
Creates a new directory.

**`touch <filename>`**  
Creates an empty file (great for starting a new doc).

**`cp <src> <dst>`**  
Copies files.

**`mv <src> <dst>`**  
Moves or renames files.

**`rm <file>`** / **`rm -r <folder>`**  
Deletes files or folders.

---

## 2. Git and Version Control

These commands are foundational for writers working in developer-style documentation workflows.

**`git status`**  
Shows what has changed.

**`git pull`**  
Updates your local repo with the latest changes.

**`git add .`**  
Stages all changes.

**`git commit -m "message"`**  
Commits your work.

**`git push`**  
Sends your commits to the remote repo.

**`git checkout <branch>`**  
Switches to another branch.

**`git checkout -b <new-branch>`**  
Creates a new branch.

**`git clone <repo-url>`**  
Clones a remote repository.

**`git diff`**  
Shows differences between edits.

**`git log`**  
Views commit history.

---

## 3. Commands for Static Site Generators

Technical writers often use tools like Jekyll, Hugo, MkDocs, or Docusaurus to build documentation sites.

### Jekyll  
**`bundle install`**  
Installs dependencies.

**`bundle exec jekyll serve`**  
Runs a local preview.

### Hugo  
**`hugo serve`**  
Starts a local server.

### MkDocs  
**`mkdocs serve`**  
Runs a live preview of your documentation site.

---

## 4. Text Search and Inspection

Helpful when working inside large codebases or doc repos.

**`grep -r "<term>" .`**  
Searches for a term recursively.

**`grep -rni "<term>" .`**  
Adds line numbers and case-insensitive search.

**`cat <file>`**  
Displays a file’s contents.

**`less <file>`**  
Opens a file for scrolling.

**`head <file>`** / **`tail <file>`**  
Shows the beginning or end of a file.

**`tail -f <file>`**  
Watches logs update in real time.

---

## 5. Running Code Samples or Tooling

Useful when verifying snippets or building docs with developer tools.

**`python <file.py>`**  
Runs a Python script.

**`node <file.js>`**  
Runs JavaScript.

**`go run <file.go>`**  
Runs a Go program.

**`npm install`**  
Installs JavaScript dependencies.

**`npm run build`**  
Builds a documentation or web project.

---

## 6. System and Environment Commands

**`which <command>`**  
Shows where a command is installed.

**`brew install <package>`** (macOS)  
Installs packages or tools.

**`sudo <command>`**  
Runs a command with administrator privileges.

---

## 7. Formatting and Miscellaneous Tools

**`wc -w <file>`**  
Counts words in a file.

**`pandoc <input> -o <output>`**  
Converts documents (e.g., Markdown to PDF).

**`open .`** (macOS)  
Opens the current folder in Finder.

---

By learning even a small set of these commands, technical writers gain more control over their tools, speed up repetitive tasks, and feel more at ease in developer-centric environments.
