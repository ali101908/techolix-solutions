# PowerShell script to fix unescaped quotes in JSX files

$files = @(
    "src\components\containers\ClientFeedbackMain.tsx",
    "src\components\containers\home\Agency.tsx",
    "src\components\containers\OliverMitchellDetailsMain.tsx",
    "src\components\containers\RohaanDetailsMain.tsx",
    "src\components\containers\service-details\AmazonVAMain.tsx",
    "src\components\containers\service-details\CyberSecurityMain.tsx",
    "src\components\containers\service-details\DigitalMarketingMain.tsx",
    "src\components\containers\service-details\GoogleAdsMain.tsx",
    "src\components\containers\service-details\SEOOptimizationMain.tsx",
    "src\components\containers\service-details\ShopifyDevelopmentMain.tsx",
    "src\components\containers\TeamDetailsMain.tsx",
    "src\components\containers\TeamMain.tsx",
    "src\components\containers\TeamMainNew.tsx",
    "src\components\containers\TeamMembers.tsx",
    "src\components\containers\TecholixFaqMain.tsx",
    "src\pages\terms-and-conditions.tsx"
)

foreach ($file in $files) {
    $fullPath = Join-Path $PSScriptRoot $file
    if (Test-Path $fullPath) {
        Write-Host "Processing: $file"
        $content = Get-Content $fullPath -Raw
        
        # Fix unescaped single quotes/apostrophes in JSX text content
        # Look for patterns like >text with ' or 'text< in JSX
        $content = $content -replace "([>]\s*[^<]*)'([^<]*[<])", '${1}&apos;${2}'
        $content = $content -replace "([>]\s*[^<]*)'([^<]*[^<]*[<])", '${1}&apos;${2}'
        
        # Fix unescaped double quotes in JSX text content
        $content = $content -replace '([>]\s*[^<]*)"([^<]*[<])', '${1}&quot;${2}'
        
        # More specific patterns for the exact issues
        $content = $content -replace "We've", "We&apos;ve"
        $content = $content -replace "I've", "I&apos;ve"
        $content = $content -replace "don't", "don&apos;t"
        $content = $content -replace "can't", "can&apos;t"
        $content = $content -replace "won't", "won&apos;t"
        $content = $content -replace "isn't", "isn&apos;t"
        $content = $content -replace "doesn't", "doesn&apos;t"
        $content = $content -replace "haven't", "haven&apos;t"
        $content = $content -replace "shouldn't", "shouldn&apos;t"
        $content = $content -replace "wouldn't", "wouldn&apos;t"
        $content = $content -replace "couldn't", "couldn&apos;t"
        $content = $content -replace "that's", "that&apos;s"
        $content = $content -replace "it's", "it&apos;s"
        $content = $content -replace "there's", "there&apos;s"
        $content = $content -replace "here's", "here&apos;s"
        $content = $content -replace "what's", "what&apos;s"
        $content = $content -replace "who's", "who&apos;s"
        $content = $content -replace "where's", "where&apos;s"
        $content = $content -replace "when's", "when&apos;s"
        $content = $content -replace "why's", "why&apos;s"
        $content = $content -replace "how's", "how&apos;s"
        $content = $content -replace "let's", "let&apos;s"
        $content = $content -replace "I'm", "I&apos;m"
        $content = $content -replace "you're", "you&apos;re"
        $content = $content -replace "we're", "we&apos;re"
        $content = $content -replace "they're", "they&apos;re"
        $content = $content -replace "Amazon's", "Amazon&apos;s"
        $content = $content -replace "client's", "client&apos;s"
        $content = $content -replace "business's", "business&apos;s"
        $content = $content -replace "company's", "company&apos;s"
        $content = $content -replace "brand's", "brand&apos;s"
        $content = $content -replace "website's", "website&apos;s"
        $content = $content -replace "team's", "team&apos;s"
        $content = $content -replace "user's", "user&apos;s"
        $content = $content -replace "customer's", "customer&apos;s"
        
        Set-Content $fullPath $content -NoNewline
        Write-Host "Fixed: $file"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Quote fixing completed!"
