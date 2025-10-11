# 🐢 Painted Turtle - VPS Deployment Guide

This guide will help you deploy your Painted Turtle Next.js application to any VPS (Virtual Private Server).

## 📋 Prerequisites

- A VPS running Ubuntu 20.04+ or similar Linux distribution
- SSH access to your VPS
- Domain name (optional, but recommended)

## 🚀 Quick Deployment (Recommended)

### Step 1: Set up your VPS

1. **Connect to your VPS:**
   ```bash
   ssh root@your-vps-ip
   ```

2. **Run the setup script:**
   ```bash
   curl -fsSL https://raw.githubusercontent.com/your-username/painted-turtle/main/setup-vps.sh | bash
   ```
   
   Or manually download and run:
   ```bash
   wget https://raw.githubusercontent.com/your-username/painted-turtle/main/setup-vps.sh
   chmod +x setup-vps.sh
   ./setup-vps.sh
   ```

### Step 2: Deploy your application

1. **Clone your repository:**
   ```bash
   git clone https://github.com/your-username/painted-turtle.git /opt/painted-turtle
   cd /opt/painted-turtle
   ```

2. **Deploy the application:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. **Configure your domain (optional):**
   - Update `/etc/nginx/sites-available/painted-turtle` with your domain name
   - Enable the site: `sudo ln -sf /etc/nginx/sites-available/painted-turtle /etc/nginx/sites-enabled/`
   - Test and reload: `sudo nginx -t && sudo systemctl reload nginx`

## 🔧 Manual Setup (Alternative)

If you prefer manual setup or the scripts don't work:

### 1. Install Docker and Docker Compose

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Log out and back in for Docker permissions
```

### 2. Install and Configure Nginx

```bash
# Install Nginx
sudo apt install -y nginx

# Copy the nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/painted-turtle

# Edit the configuration with your domain
sudo nano /etc/nginx/sites-available/painted-turtle

# Enable the site
sudo ln -sf /etc/nginx/sites-available/painted-turtle /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and restart Nginx
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 3. Deploy the Application

```bash
# Build and start the application
docker-compose build
docker-compose up -d

# Check if it's running
docker-compose ps
curl http://localhost:3000
```

## 🔒 SSL Setup (Recommended)

For production, set up SSL with Let's Encrypt:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Test auto-renewal
sudo certbot renew --dry-run
```

## 📊 Monitoring and Maintenance

### Useful Commands

```bash
# View application logs
docker-compose logs -f

# Restart application
docker-compose restart

# Update application
git pull
docker-compose build
docker-compose up -d

# Check application status
docker-compose ps
curl http://localhost:3000/health

# Monitor system resources
htop
df -h
```

### Setting up Monitoring (Optional)

1. **Install monitoring tools:**
   ```bash
   sudo apt install htop iotop nethogs
   ```

2. **Set up log rotation:**
   ```bash
   sudo nano /etc/logrotate.d/docker-containers
   ```
   
   Add:
   ```
   /var/lib/docker/containers/*/*.log {
       rotate 7
       daily
       compress
       size=1M
       missingok
       delaycompress
       copytruncate
   }
   ```

## 🔧 Troubleshooting

### Common Issues

1. **Application won't start:**
   ```bash
   docker-compose logs
   docker-compose down
   docker-compose build --no-cache
   docker-compose up -d
   ```

2. **Permission issues:**
   ```bash
   sudo usermod -aG docker $USER
   # Log out and back in
   ```

3. **Port already in use:**
   ```bash
   sudo netstat -tulpn | grep :3000
   sudo kill -9 <PID>
   ```

4. **Nginx configuration errors:**
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

### Performance Optimization

1. **Enable Nginx caching:**
   - Edit `/etc/nginx/sites-available/painted-turtle`
   - Uncomment caching directives

2. **Optimize Docker:**
   ```bash
   # Clean up unused Docker resources
   docker system prune -a
   
   # Monitor Docker stats
   docker stats
   ```

## 📈 Scaling (Future)

For high traffic, consider:

1. **Load balancing** with multiple app instances
2. **CDN** for static assets (Cloudflare, AWS CloudFront)
3. **Database** if you add backend features
4. **Redis** for caching
5. **Monitoring** with Prometheus + Grafana

## 🆘 Support

If you encounter issues:

1. Check the logs: `docker-compose logs`
2. Verify configuration: `docker-compose config`
3. Test connectivity: `curl http://localhost:3000`
4. Check system resources: `htop`, `df -h`

---

**🎉 Congratulations!** Your Painted Turtle application should now be running on your VPS!

Access it at: `http://your-vps-ip:3000` or `https://your-domain.com`
