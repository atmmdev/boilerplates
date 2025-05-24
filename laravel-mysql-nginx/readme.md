# Laravel + MySQL + Nginx with Docker (Production-ready Setup)

This project provides a production-oriented Docker environment for running a Laravel application with MySQL and Nginx.

## Project Structure

```
laravel-app/
├── docker
│   ├── nginx
│   │   └── default.conf
│   └── php
│       └── Dockerfile
├── src
│   └── .gitkeep (this file need to be removed)
├── .env
├── docker-compose.yml
```

## Requirements

- Docker Desktop: [Install Docker](https://docs.docker.com/get-docker/)

## Installing and run the project

```bash
# Step 01 - Clone the repository and Access the repository. And start the containers
docker-compose up -d --build

# Step 02 -  Remove the .gitkeep file. Why I use .gitkeep? Git does not have a versioning of empty directories. If the src/ folder is empty (as it was when the project was created), it would not be included in the .zip or in a Git repository. To solve this, the common practice is to: Create the directory and add an empty file called .gitkeep inside it.

# This way, the directory structure is preserved even if it is empty.
docker-compose exec app sh -c "rm -f /var/www/html/.gitkeep"

# Step 03 - Install the Laravel Framework
docker-compose exec app composer create-project laravel/laravel .

#Step 04 - Inside the src folder, you will find the Laravel Framework .env. You need to change the credentials so that they are inside the .env-example file.

From this:
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

To this:
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=secret

# Step 05 - Run the aplication/migrations
docker-compose exec app php artisan migrate

# Step 06 - Access your application and phpmyadmin
app: http://localhost or http://localhost:80
phpmyadmin: http://localhost:8080

# Stopping and Cleaning up the containers, volumes, networks, images.
docker-compose down --rmi all --volumes
```
