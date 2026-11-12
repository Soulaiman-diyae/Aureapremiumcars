@echo off
title Aurea car editor
cd /d "%~dp0.."
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Download the LTS version from https://nodejs.org/ then try again.
  pause
  exit /b 1
)
echo Getting the latest version of the website...
git pull --rebase --autostash -q
start "" http://127.0.0.1:4177/
node _editor\server.js
pause
