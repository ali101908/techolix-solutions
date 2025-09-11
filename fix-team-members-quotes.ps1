# PowerShell script to fix specific quote issues

$files = @(
    "src\components\containers\TeamMembers.tsx"
)

foreach ($file in $files) {
    $fullPath = Join-Path $PSScriptRoot $file
    if (Test-Path $fullPath) {
        Write-Host "Processing: $file"
        $content = Get-Content $fullPath -Raw
        
        # Fix specific quote patterns in TeamMembers.tsx
        $content = $content -replace '"Driving organic growth through advanced SEO strategies and data-driven optimization techniques.&quot;', '&quot;Driving organic growth through advanced SEO strategies and data-driven optimization techniques.&quot;'
        $content = $content -replace '"Crafting powerful WordPress solutions with custom themes and seamless functionality.&quot;', '&quot;Crafting powerful WordPress solutions with custom themes and seamless functionality.&quot;'
        $content = $content -replace '"Amplifying brand presence through strategic digital campaigns and creative marketing solutions.&quot;', '&quot;Amplifying brand presence through strategic digital campaigns and creative marketing solutions.&quot;'
        $content = $content -replace '"Building robust e-commerce solutions with Shopify expertise and conversion optimization.&quot;', '&quot;Building robust e-commerce solutions with Shopify expertise and conversion optimization.&quot;'
        
        Set-Content $fullPath $content -NoNewline
        Write-Host "Fixed: $file"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "TeamMembers.tsx quote fixing completed!"
