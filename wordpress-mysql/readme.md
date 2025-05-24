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
│   └── my-theme/
│       ├── style.css
│       └── index.php
├── plugins/
│   └── my-plugin/
│       └── my-plugin.php
└── README.md
```

## Requirements

- Docker Desktop: [Install Docker](https://docs.docker.com/get-docker/)

## Installing and run the project

```bash
# Step 01 - Clone the repository and Access the repository.

# Step 02 - Duplicate the .env-example, and rename to '.env'.

# Step 03 - Start the project
docker-compose up -d --build

# Step 04 - Access your application
http://localhost or http://localhost:80

# Accessing MySQL - You can access the MySQL container using, and use the password from 'MYSQL_ROOT_PASSWORD' in '.env'.
docker exec -it php-mysql-db mysql -u root -p

# Stopping and Cleaning up the containers, volumes, networks, images.
docker-compose down --rmi all --volumes
```
