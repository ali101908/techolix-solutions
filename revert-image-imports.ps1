# PowerShell script to revert image imports back to original format in Next.js project
Write-Host "Starting image import revert process..."
$totalFilesFixed = 0

# Get all .tsx files in src directory
$files = Get-ChildItem -Path "c:\Users\LAPTOP SHAPTOP\Desktop\techolix-solutions\src" -Recurse -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $hasChanges = $false
    
    # Find all const declarations for images
    $constMatches = [regex]::Matches($content, 'const\s+(\w+)\s+=\s+"(/images/[^"]+)";')
    
    if ($constMatches.Count -gt 0) {
        Write-Host "Processing: $($file.Name)"
        
        # Convert each const back to import statement
        foreach ($match in $constMatches) {
            $variableName = $match.Groups[1].Value
            $imagePath = $match.Groups[2].Value
            $oldConst = $match.Groups[0].Value
            $newImport = "import " + $variableName + " from `"" + $imagePath + "`";"
            
            Write-Host "  Converting: $oldConst -> $newImport"
            $content = $content -replace [regex]::Escape($oldConst), $newImport
            $hasChanges = $true
        }
        
        if ($hasChanges) {
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8
            $totalFilesFixed++
            Write-Host "  Fixed $($file.Name)"
        }
    }
}

Write-Host "Image import revert completed!"
Write-Host "Total files fixed: $totalFilesFixed"
