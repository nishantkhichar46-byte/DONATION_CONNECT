@echo off
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
echo ========================================================
echo  Starting Donation Connect Web Application (DTI)
echo ========================================================
echo.
echo Application URL: http://localhost:5173/
echo.
start http://localhost:5173/
npm run dev -- --host 127.0.0.1 --port 5173
pause
