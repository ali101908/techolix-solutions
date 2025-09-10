# PowerShell script to fix all static image imports in Next.js project
Write-Host "Starting image import fix process..."
$totalFilesFixed = 0

# Get all .tsx files in src directory
$files = Get-ChildItem -Path "c:\Users\DELL\Desktop\ltr\src" -Recurse -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $hasChanges = $false
    
    # Find all import statements for images
    $importMatches = [regex]::Matches($content, 'import\s+(\w+)\s+from\s+"(/images/[^"]+)";')
    
    if ($importMatches.Count -gt 0) {
        Write-Host "Processing: $($file.Name)"
        
        # Convert each import to const declaration
        foreach ($match in $importMatches) {
            $variableName = $match.Groups[1].Value
            $imagePath = $match.Groups[2].Value
            $oldImport = $match.Groups[0].Value
            $newConst = "const " + $variableName + " = `"" + $imagePath + "`";"
            
            Write-Host "  Converting: $oldImport -> $newConst"
            $content = $content -replace [regex]::Escape($oldImport), $newConst
            $hasChanges = $true
        }
        
        if ($hasChanges) {
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8
            $totalFilesFixed++
            Write-Host "  Fixed $($file.Name)"
        }
    }
}

Write-Host "Image import fix completed!"
Write-Host "Total files fixed: $totalFilesFixed"
