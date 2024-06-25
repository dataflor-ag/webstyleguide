# Get the current directory
$currentDir = Get-Location

# Get all subdirectories
$directories = Get-ChildItem -Directory

# Iterate through each subdirectory and run "npm ci"
foreach ($dir in $directories) {
    # Change to the subdirectory
    Set-Location $dir.FullName
    
    # Check if package.json exists
    if (Test-Path "package.json") {
        # Execute "npm ci"
        Write-Host "Executing 'npm ci' in $($dir.FullName)"
        npm i
    } else {
        Write-Host "Skipping $($dir.FullName) - No package.json found"
    }
    
    # Change back to the original directory
    Set-Location $currentDir
}
