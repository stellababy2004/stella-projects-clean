@echo off
cd /d %~dp0
git add .
git commit -m "Автоматичен ъпдейт"
git push origin main
pause