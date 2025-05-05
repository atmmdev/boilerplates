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

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose

## Installing and run the project

```bash

# Step 01
# Clone the repository: git clone https://github.com/your-user/php-mysql-prod.git
# Access the repository: cd php-mysql-prod

# Step 02
# Create the `.env` file
# DB_HOST=db
# DB_PORT=3306
# DB_DATABASE=app
# DB_USERNAME=appuser
# DB_PASSWORD=apppassword
#
# MYSQL_ROOT_PASSWORD=rootpassword

# Step **03**
# Add your PHP files: Put your PHP application inside the `src/public/` directory.
# Save it as `src/public/index.php`.

# Step 04
# Build the Docker images: 'docker-compose build'

# Step 05
# Start the containers: 'docker-compose up -d'

# Step 06
# Access your application: http://localhost
# You should see the output of `index.php`.

# Step 07
# Check container status: 'docker-compose ps'

# Step 08
# Check container logs (optional): 'docker-compose logs -f'

# Accessing MySQL
# You can access the MySQL container using: 'docker exec -it php-mysql-db mysql -u root -p'
# Use the password from `MYSQL_ROOT_PASSWORD` in `.env`.

# Stopping and Cleaning up the Containers: 'docker-compose down --volumes'
```
