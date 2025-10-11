@echo off
REM Painted Turtle - VPS Upload Helper for Windows
REM This batch file helps you prepare and upload your app to a VPS

echo 🐢 Painted Turtle - VPS Upload Helper
echo =====================================
echo.

echo 📋 Prerequisites:
echo - VPS with SSH access
echo - WinSCP, FileZilla, or similar SFTP client
echo - Your VPS IP address and credentials
echo.

echo 📁 Files to upload to your VPS:
echo - All files in this directory
echo - Upload to: /opt/painted-turtle/ on your VPS
echo.

echo 🚀 After uploading, SSH into your VPS and run:
echo    cd /opt/painted-turtle
echo    chmod +x deploy.sh setup-vps.sh
echo    ./setup-vps.sh
echo    ./deploy.sh
echo.

echo 📖 For detailed instructions, see:
echo    - deploy-windows.md (Windows-specific guide)
echo    - DEPLOYMENT.md (Complete deployment guide)
echo.

pause
