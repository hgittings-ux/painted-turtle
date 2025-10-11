@echo off
echo ========================================
echo PDF to JPEG Converter Setup
echo ========================================
echo.

REM Check if Python is already installed
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Python is already installed!
    python --version
    echo.
    goto :install_deps
)

echo Python is not installed. Please install Python first.
echo.
echo Option 1: Install from Microsoft Store (Recommended)
echo   - The Microsoft Store should have opened automatically
echo   - Search for "Python 3.12" and install it
echo.
echo Option 2: Download from python.org
echo   - Visit: https://python.org/downloads/
echo   - Download Python 3.12 or later
echo   - Make sure to check "Add Python to PATH" during installation
echo.
echo After installing Python, run this script again.
echo.
pause
exit /b 1

:install_deps
echo Installing required Python packages...
echo.
python -m pip install --upgrade pip
python -m pip install pdf2image pillow
echo.

if %errorlevel% == 0 (
    echo ✓ Dependencies installed successfully!
    echo.
    echo Now you can convert PDFs to JPEG:
    echo.
    echo   Single file:
    echo     python batch_pdf_converter.py "public/images/Red tailed hawk.pdf"
    echo.
    echo   All PDFs in public/images:
    echo     python batch_pdf_converter.py "public/images"
    echo.
    echo   All PDFs in current directory:
    echo     python batch_pdf_converter.py .
    echo.
) else (
    echo ✗ Failed to install dependencies.
    echo Please check your internet connection and try again.
)

pause

