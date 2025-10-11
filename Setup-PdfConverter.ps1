# PowerShell script to set up PDF to JPEG converter
param(
    [switch]$InstallPython,
    [switch]$InstallDependencies,
    [switch]$ConvertAll,
    [string]$Directory = "public/images"
)

Write-Host "PDF to JPEG Converter Setup" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Python is installed: $pythonVersion" -ForegroundColor Green
        $pythonInstalled = $true
    } else {
        throw "Python not found"
    }
} catch {
    Write-Host "✗ Python is not installed" -ForegroundColor Red
    $pythonInstalled = $false
}

# Install Python if requested
if ($InstallPython -and -not $pythonInstalled) {
    Write-Host "Installing Python from Microsoft Store..." -ForegroundColor Yellow
    start ms-windows-store://pdp/?productid=9NRWMJP3717K
    Write-Host "Please install Python from the Microsoft Store, then run this script again with -InstallDependencies" -ForegroundColor Yellow
    return
}

# Install dependencies if requested
if ($InstallDependencies -and $pythonInstalled) {
    Write-Host "Installing Python dependencies..." -ForegroundColor Yellow
    python -m pip install --upgrade pip
    python -m pip install pdf2image pillow
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Dependencies installed successfully!" -ForegroundColor Green
    } else {
        Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
        return
    }
}

# Convert PDFs if requested
if ($ConvertAll -and $pythonInstalled) {
    Write-Host "Converting all PDFs in '$Directory'..." -ForegroundColor Yellow
    python batch_pdf_converter.py $Directory
}

# Show usage if no specific action requested
if (-not $InstallPython -and -not $InstallDependencies -and -not $ConvertAll) {
    Write-Host "Usage examples:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Install Python:" -ForegroundColor White
    Write-Host "   .\Setup-PdfConverter.ps1 -InstallPython" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Install dependencies (after Python is installed):" -ForegroundColor White
    Write-Host "   .\Setup-PdfConverter.ps1 -InstallDependencies" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. Convert all PDFs:" -ForegroundColor White
    Write-Host "   .\Setup-PdfConverter.ps1 -ConvertAll" -ForegroundColor Gray
    Write-Host ""
    Write-Host "4. Convert PDFs in specific directory:" -ForegroundColor White
    Write-Host "   .\Setup-PdfConverter.ps1 -ConvertAll -Directory 'public/images'" -ForegroundColor Gray
    Write-Host ""
    Write-Host "5. Manual conversion commands:" -ForegroundColor White
    Write-Host "   python batch_pdf_converter.py 'public/images/Red tailed hawk.pdf'" -ForegroundColor Gray
    Write-Host "   python batch_pdf_converter.py public/images" -ForegroundColor Gray
}

