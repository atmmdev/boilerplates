# WordPress + MySQL + Nginx with Docker (Production-ready Setup)

This repository provides a professional, production-ready Docker setup for WordPress with MySQL and Nginx.

## Project Structure

```
wordpress-prod/
│
├── docker-compose.yml
├── .env
├── docker/
│   └── nginx/
│       └── default.conf
├── themes/
│   └── meu-tema/
│       ├── style.css
│       └── index.php
├── plugins/
│   └── meu-plugin/
│       └── meu-plugin.php
└── README.md
```

## Requirements

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose

## Installing and run the project

```bash
# Step 01
# Clone the repository: and Access the repository.

# Step 02
# Create the `.env` file
# MySQL
# MYSQL_DATABASE=wordpress
# MYSQL_USER=wp_user
# MYSQL_PASSWORD=wp_password
# MYSQL_ROOT_PASSWORD=wp_root
#
# WordPress
# WORDPRESS_DB_HOST=db:3306
# WORDPRESS_DB_NAME=wordpress
# WORDPRESS_DB_USER=wp_user
# WORDPRESS_DB_PASSWORD=wp_password

# Step 03
# Start the project: 'docker-compose up -d --build'

# Step 04
# Access WordPress: http://localhost

# Stopping and Cleaning: 'docker-compose down --volumes'
```
