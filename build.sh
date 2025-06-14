#!/bin/bash

echo "Building NextJS application for GitHub Pages..."

# Clean previous builds
rm -rf out .next

# Build the application
npm run build

# Add .nojekyll file
touch out/.nojekyll

echo "Build completed! Static files are in the 'out' directory."
echo "You can now deploy these files to GitHub Pages."
