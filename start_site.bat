@echo off
cd /d "%~dp0docs"
start "" http://localhost:8000
python -m http.server 8000
pause
