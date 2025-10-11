# 🐢 Windows to VPS Deployment Guide

Since you're on Windows, here's how to deploy your Painted Turtle app to a VPS:

## 📁 Files Created for Deployment

I've created these deployment files for you:

- `Dockerfile` - Container configuration
- `docker-compose.yml` - Container orchestration
- `.dockerignore` - Files to exclude from Docker build
- `deploy.sh` - Linux deployment script
- `setup-vps.sh` - VPS setup script
- `nginx.conf` - Web server configuration
- `.env.example` - Environment variables template
- `DEPLOYMENT.md` - Complete deployment guide

## 🚀 Deployment Options

### Option 1: Upload via SCP/SFTP (Recommended)

1. **Install an SFTP client** (like WinSCP, FileZilla, or use VS Code with SFTP extension)

2. **Upload your project folder** to your VPS:
   - Connect to your VPS via SFTP
   - Upload the entire `painted-turtle` folder to `/opt/` on your VPS

3. **SSH into your VPS** and run:
   ```bash
   cd /opt/painted-turtle
   chmod +x deploy.sh setup-vps.sh
   ./setup-vps.sh  # First time only
   ./deploy.sh
   ```

### Option 2: Git Repository (Best for Updates)

1. **Create a GitHub repository:**
   - Push your code to GitHub
   - Make sure to include all the deployment files

2. **On your VPS:**
   ```bash
   git clone https://github.com/your-username/painted-turtle.git /opt/painted-turtle
   cd /opt/painted-turtle
   chmod +x deploy.sh setup-vps.sh
   ./setup-vps.sh
   ./deploy.sh
   ```

### Option 3: Direct Upload via Cloud Storage

1. **Zip your project folder** (excluding node_modules)
2. **Upload to Google Drive/Dropbox**
3. **Download on your VPS** and extract

## 🔧 VPS Setup Commands

Once you have your files on the VPS, run these commands:

```bash
# Make scripts executable
chmod +x deploy.sh setup-vps.sh

# Run setup (first time only)
./setup-vps.sh

# Deploy the application
./deploy.sh
```

## 📋 What Each Script Does

### `setup-vps.sh`
- Installs Docker and Docker Compose
- Installs Nginx for reverse proxy
- Sets up security headers
- Creates application directory
- Configures system for production

### `deploy.sh`
- Builds Docker image
- Starts the application container
- Checks if app is running
- Provides useful management commands

## 🌐 Access Your App

After deployment:
- **Direct access:** `http://your-vps-ip:3000`
- **With domain:** `http://your-domain.com` (after configuring DNS)

## 🔄 Updating Your App

For future updates:

1. **Make changes locally**
2. **Upload to VPS** (via Git or SFTP)
3. **Run on VPS:**
   ```bash
   cd /opt/painted-turtle
   git pull  # if using Git
   docker-compose down
   docker-compose build
   docker-compose up -d
   ```

## 🆘 Need Help?

The complete deployment guide is in `DEPLOYMENT.md` with troubleshooting tips and advanced configurations.

Your app is ready to deploy! 🎉
