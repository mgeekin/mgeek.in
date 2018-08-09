@echo git add .
git add .
git status
@echo off
title git push enter commit message
@echo Enter commit message
set /p commit=
@echo git commit
git commit -m"%commit%"
@echo git push
git push
@echo completed