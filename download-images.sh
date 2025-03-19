#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download placeholder images from Unsplash
curl -o public/hero-interior.jpg "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000"
curl -o public/about-interior.jpg "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000"

echo "Images downloaded successfully!" 