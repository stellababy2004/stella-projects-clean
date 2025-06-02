
@echo off
echo === УДАЛЯВАНЕ НА ПАПКА docs/ ===
if exist docs (
    rmdir /s /q docs
    echo → Папката docs е изтрита.
) else (
    echo → Няма папка docs – продължаваме.
)

echo === ДОБАВЯНЕ НА ВСИЧКИ ФАЙЛОВЕ ===
git add .

echo === COMMIT СЪОБЩЕНИЕ ===
git commit -m "Clean root, remove docs folder and push all updated HTML files to GitHub Pages root"

echo === PUSH КЪМ ORIGIN/MAIN ===
git push origin main

echo.
echo === ГОТОВО! Изчакай 30 секунди и провери сайта ===
echo 🔗 https://stellababy2004.github.io/stella-projects/
pause
