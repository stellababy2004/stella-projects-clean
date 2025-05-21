@echo off
echo Forcing GitHub Pages refresh...
cd /d "%~dp0"

:: Добавяме фиктивен commit
git commit --allow-empty -m "Force GitHub Pages rebuild"

:: Push към GitHub
git push origin main

echo Done! Check your site in a minute.
pause
