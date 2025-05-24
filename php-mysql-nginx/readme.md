# PHP + MySQL + Nginx with Docker (Production-ready Setup)

This project provides a production-oriented Docker environment for running a PHP application with MySQL and Nginx.

## Project Structure

```
php-mysql-prod/
├── docker/
│   ├── nginx/
│   │   └── default.conf          # Nginx site configuration
│   └── php/
│       └── Dockerfile            # PHP Dockerfile
├── src/
│   └── public/
│       └── index.php             # Your PHP entry point
├── .env                          # Environment variables
└── docker-compose.yml
```

## Requirements

- Docker Desktop: [Install Docker](https://docs.docker.com/get-docker/)

## Installing and run the project

```bash
# Step 01 - Clone the repository and Access the repository.

# Step 02 - Duplicate the .env-example, and rename to '.env'.

# Step 03 - Add your PHP files: Put your PHP application inside this folder
'src/public/'

# Step 04 - Start the project
docker-compose up -d --build

# Step 05 - Access your application
http://localhost or http://localhost:80

# Accessing MySQL - You can access the MySQL container using, and use the password from 'MYSQL_ROOT_PASSWORD' in '.env'.
docker exec -it php-mysql-db mysql -u root -p

# Stopping and Cleaning up the containers, volumes, networks, images.
docker-compose down --rmi all --volumes
```
