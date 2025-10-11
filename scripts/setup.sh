#!/bin/bash

# Setup script for Offline Labs website
echo "Setting up Offline Labs website..."

# Install dependencies
npm install

# Generate package-lock.json
npm install --package-lock-only

echo "Setup complete!"
