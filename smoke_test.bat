@echo off

echo Running smoke test...
curl -I http://localhost >nul 2>nul

IF %ERRORLEVEL%==0 (
   echo Smoke Test PASSED
   exit /B 0
) ELSE (
   echo Smoke Test FAILED
   exit /B 1
)
