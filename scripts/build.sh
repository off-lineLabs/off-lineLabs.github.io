#!/bin/bash

# Build script for Offline Labs website
echo "Building Offline Labs website..."

# Install dependencies
npm install

# Build the project
npm run build

# Export static files for GitHub Pages
npm run export

echo "Build complete! Static files are ready for deployment."
