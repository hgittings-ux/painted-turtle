#!/bin/bash

# VPS Setup Script for Painted Turtle
# Run this script on your VPS to install all required dependencies

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}🐢 $1${NC}"
}

# Detect OS
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="mac"
else
    print_error "Unsupported operating system: $OSTYPE"
    exit 1
fi

print_header "Setting up VPS for Painted Turtle deployment..."

# Update system packages
print_status "Updating system packages..."
if [[ "$OS" == "linux" ]]; then
    sudo apt update && sudo apt upgrade -y
elif [[ "$OS" == "mac" ]]; then
    print_warning "macOS detected. Please ensure Homebrew is installed."
fi

# Install Docker
print_status "Installing Docker..."
if [[ "$OS" == "linux" ]]; then
    # Remove old Docker versions
    sudo apt-get remove -y docker docker-engine docker.io containerd runc
    
    # Install Docker
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    
    # Install Docker Compose
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    
    print_status "Docker installed successfully!"
    print_warning "You may need to log out and back in for Docker group permissions to take effect."
    
elif [[ "$OS" == "mac" ]]; then
    print_status "For macOS, please install Docker Desktop from: https://www.docker.com/products/docker-desktop/"
fi

# Install Nginx (optional, for reverse proxy)
print_status "Installing Nginx (for reverse proxy)..."
if [[ "$OS" == "linux" ]]; then
    sudo apt install -y nginx
    
    # Create Nginx configuration
    sudo tee /etc/nginx/sites-available/painted-turtle > /dev/null <<EOF
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

    # Enable the site
    sudo ln -sf /etc/nginx/sites-available/painted-turtle /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    
    # Test and restart Nginx
    sudo nginx -t
    sudo systemctl restart nginx
    sudo systemctl enable nginx
    
    print_status "Nginx configured for reverse proxy!"
fi

# Install Git (if not already installed)
print_status "Installing Git..."
if [[ "$OS" == "linux" ]]; then
    sudo apt install -y git
fi

# Create application directory
print_status "Creating application directory..."
sudo mkdir -p /opt/painted-turtle
sudo chown $USER:$USER /opt/painted-turtle

print_status "✅ VPS setup completed!"
print_status ""
print_status "Next steps:"
echo "1. Clone your repository: git clone <your-repo-url> /opt/painted-turtle"
echo "2. Navigate to the directory: cd /opt/painted-turtle"
echo "3. Run deployment: ./deploy.sh"
echo ""
print_status "Optional: Set up SSL with Let's Encrypt:"
echo "  sudo apt install certbot python3-certbot-nginx"
echo "  sudo certbot --nginx -d your-domain.com"
