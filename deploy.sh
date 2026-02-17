#!/bin/bash

echo "🚀 Deploying Shivakiran's Portfolio to GitHub Pages..."
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: frontend directory not found!"
    echo "Please run this script from the project root directory."
    exit 1
fi

# Navigate to frontend
cd frontend

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
fi

# Build the project
echo "🔨 Building production version..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📤 Now deploying to GitHub Pages..."
echo ""

# Deploy to GitHub Pages
yarn deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your portfolio will be live at:"
    echo "   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
    echo ""
    echo "⏱️  It may take a few minutes for changes to appear."
    echo ""
else
    echo "❌ Deployment failed!"
    echo "Please check your git configuration and try again."
    exit 1
fi
