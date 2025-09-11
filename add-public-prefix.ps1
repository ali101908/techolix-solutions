# PowerShell script to add "public/" prefix to all remaining image imports

Write-Host "Starting to add public/ prefix to remaining image imports..." -ForegroundColor Green

# Get all TypeScript and JavaScript files
$files = Get-ChildItem -Path "c:\Users\LAPTOP SHAPTOP\Desktop\techolix-solutions\src" -Recurse -Include "*.tsx", "*.ts", "*.jsx", "*.js"

$totalFiles = 0
$processedFiles = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Replace import statements: from "/images/ to from "public/images/
    $content = $content -replace 'import\s+([^"]+)\s+from\s+"(/images/[^"]+)"', 'import $1 from "public$2"'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "  Updated: $($file.Name)" -ForegroundColor Yellow
        $processedFiles++
    }
    $totalFiles++
}

Write-Host "Completed! Processed $processedFiles out of $totalFiles files." -ForegroundColor Green
Write-Host "All remaining image imports now have 'public/' prefix." -ForegroundColor Cyan
