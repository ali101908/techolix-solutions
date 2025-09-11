# PowerShell script to fix all image imports in the project

Write-Host "Starting comprehensive image import fix..."

# Get all TypeScript/TSX files with image imports
$files = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse | Where-Object { 
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    $content -match 'import .* from "/images/'
}

foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)"
    $content = Get-Content $file.FullName -Raw
    
    # Common image import patterns to fix
    $patterns = @{
        'import ([a-zA-Z0-9_]+) from "/images/([^"]+)";' = ''  # Remove import lines
        'src=\{([a-zA-Z0-9_]+)\}' = 'src="/images/$1" width={300} height={300}'  # Generic replacement
    }
    
    # Specific file-based replacements
    if ($file.Name -eq "Agency.tsx") {
        $content = $content -replace 'import thumbone from "/images/banner/thumb-one\.png";', ''
        $content = $content -replace 'import thumbtwo from "/images/banner/thumb-two\.png";', ''
        $content = $content -replace 'import star from "/images/star\.png";', ''
        $content = $content -replace 'import dotlarge from "/images/agency/dot-large\.png";', ''
        $content = $content -replace 'src=\{thumbone\}', 'src="/images/banner/thumb-one.png" width={400} height={300}'
        $content = $content -replace 'src=\{thumbtwo\}', 'src="/images/banner/thumb-two.png" width={400} height={300}'
        $content = $content -replace 'src=\{star\}', 'src="/images/star.png" width={30} height={30}'
        $content = $content -replace 'src=\{dotlarge\}', 'src="/images/agency/dot-large.png" width={50} height={50}'
    }
    
    # Remove empty lines created by removing imports
    $content = $content -replace '(\r?\n){3,}', "`r`n`r`n"
    
    Set-Content $file.FullName $content -NoNewline -ErrorAction SilentlyContinue
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "Image import fix completed!"
