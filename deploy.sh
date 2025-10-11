#!/bin/bash

# Painted Turtle - VPS Deployment Script
# This script sets up and deploys the Next.js application on a VPS

set -e

echo "🐢 Starting Painted Turtle deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    print_status "Install instructions: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

print_status "Building Docker image..."
docker-compose build

print_status "Starting application..."
docker-compose up -d

print_status "Checking if application is running..."
sleep 5

# Check if the application is responding
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    print_status "✅ Application is running successfully on port 3000!"
    print_status "🌐 You can access your app at: http://your-server-ip:3000"
else
    print_error "❌ Application failed to start. Check logs with: docker-compose logs"
    exit 1
fi

print_status "📋 Useful commands:"
echo "  - View logs: docker-compose logs -f"
echo "  - Stop app: docker-compose down"
echo "  - Restart app: docker-compose restart"
echo "  - Update app: git pull && docker-compose build && docker-compose up -d"

echo ""
print_status "🎉 Deployment completed successfully!"
