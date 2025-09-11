# Fix remaining image imports

$files = @(
    "src\components\layout\header\Offcanvas.tsx",
    "src\components\containers\home\HomeTestimonial.tsx", 
    "src\components\layout\banner\HomeTwoBanner.tsx",
    "src\components\layout\footer\FooterTwo.tsx",
    "src\components\containers\project\WorkStepsProject.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing: $file"
        $content = Get-Content $file -Raw
        
        # Remove import statements
        $content = $content -replace 'import logo from "/images/agency/tech-icon\.png";\r?\n', ''
        $content = $content -replace 'import sthumb from "/images/testimonial/client\.png";\r?\n', ''
        $content = $content -replace 'import sthumbtwo from "/images/testimonial/client\.png";\r?\n', ''
        $content = $content -replace 'import sthumbthree from "/images/testimonial/client\.png";\r?\n', ''
        $content = $content -replace 'import dawn from "/images/banner/dawn\.png";\r?\n', ''
        $content = $content -replace 'import videoframe from "/images/video-frame\.png";\r?\n', ''
        
        # Replace variable usages
        $content = $content -replace 'src=\{logo\}', 'src="/images/agency/tech-icon.png" width={120} height={60}'
        $content = $content -replace 'src=\{sthumb\}', 'src="/images/testimonial/client.png" width={60} height={60}'
        $content = $content -replace 'src=\{sthumbtwo\}', 'src="/images/testimonial/client.png" width={60} height={60}'
        $content = $content -replace 'src=\{sthumbthree\}', 'src="/images/testimonial/client.png" width={60} height={60}'
        $content = $content -replace 'src=\{dawn\}', 'src="/images/banner/dawn.png" width={200} height={200}'
        $content = $content -replace 'src=\{videoframe\}', 'src="/images/video-frame.png" width={300} height={200}'
        
        # Clean up multiple empty lines
        $content = $content -replace '(\r?\n){3,}', "`r`n`r`n"
        
        Set-Content $file $content -NoNewline
        Write-Host "Fixed: $file"
    }
}

Write-Host "Remaining image imports fixed!"
