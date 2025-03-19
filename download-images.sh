#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public/projects

# Download placeholder images from Unsplash
# Hero and About images
curl -o public/hero-interior.jpg "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000"
curl -o public/about-interior.jpg "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000"

# Project category images
curl -o public/projects/carpentry.jpg "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1200"
curl -o public/projects/hotel.jpg "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200"
curl -o public/projects/bathroom.jpg "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200"
curl -o public/projects/planning.jpg "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200"
curl -o public/projects/decorating.jpg "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"

echo "Images downloaded successfully!" 