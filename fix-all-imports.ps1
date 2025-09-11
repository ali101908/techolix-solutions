# PowerShell script to fix all image imports for production build
Write-Host "Fixing image imports for production build..."

# Define the list of files that need to be fixed
$filesToFix = @(
    "src\components\layout\header\HeaderTwo.tsx",
    "src\components\layout\header\Offcanvas.tsx",
    "src\components\containers\home\Agency.tsx",
    "src\components\containers\home-three\AboutSponsor.tsx",
    "src\components\containers\home\HomeTestimonial.tsx",
    "src\components\layout\banner\HomeTwoBanner.tsx",
    "src\components\containers\home-two\TecholixHomeTwoOffer.tsx",
    "src\components\layout\header\HeaderThree.tsx",
    "src\components\layout\header\HeaderFour.tsx",
    "src\components\layout\header\HeaderFive.tsx",
    "src\components\layout\header\Header.tsx",
    "src\components\layout\footer\FooterThree.tsx",
    "src\components\layout\footer\FooterFour.tsx",
    "src\components\layout\footer\FooterFive.tsx",
    "src\components\layout\footer\Footer.tsx",
    "src\components\layout\footer\FooterTwo.tsx",
    "src\components\containers\RohaanDetailsMain.tsx",
    "src\components\containers\project\WorkStepsProject.tsx",
    "src\components\containers\TeamMain.tsx"
)

$totalFilesFixed = 0

foreach ($relativePath in $filesToFix) {
    $fullPath = Join-Path $PSScriptRoot $relativePath
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        $originalContent = $content
        
        # Replace public/images/ with /images/
        $content = $content -replace 'from "public/images/', 'from "/images/'
        
        # Replace any remaining public/images references
        $content = $content -replace '"public/images/', '"/images/'
        
        if ($content -ne $originalContent) {
            Set-Content -Path $fullPath -Value $content -NoNewline
            Write-Host "Fixed: $relativePath"
            $totalFilesFixed++
        }
    } else {
        Write-Host "File not found: $fullPath"
    }
}

Write-Host "Total files fixed: $totalFilesFixed"
Write-Host "Image import fix complete!"
