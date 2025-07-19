# Node + Express + TypeScript + MySQL / MongoDB

This repository provides a professional, production-ready Docker setup for Node + Express + TypeScript + MySQL / MongoDB.

## Project Structure

```
node-express-mysql-mongodb/
│
├── src/                   # Core of Application
│   ├── controllers/       # Controllers
│   ├── routes/            # Routes
│   ├── config/            # Connection with databases
│   └── main.ts            # File to start the appication
│
├── .env                   # Variables of environment
├── Dockerfile             # Docker
├── docker-compose.yml     # Orquestraton with MySQL or MongoDB
├── nodemon.json           # Setup of hot reload
├── package.json           # Dependencies and scripts
├── tsconfig.json          # Setup of TypeScript
└── README.md
```

## Requirements

- Docker Desktop: [Install Docker](https://docs.docker.com/get-docker/)

## Installing and run the project

```bash
# Step 01 - Clone the repository and Access the repository.

# Step 02 - Duplicate the .env-example, and rename to '.env'.
# Step 02.1 - Edit and choose: DB_ENGINE=mysql or mongo

# Step 03 - Start the project
docker-compose up -d --build

# Step 04 - Access your application
# Step 04.1 - Initial routes for test
GET / http://localhost:3000/
GET / http://localhost:3000/health

# Stopping and Cleaning up the containers, volumes, networks, images.
docker-compose down --rmi all --volumes

# Notes
Nodemon is already configured with legacyWatch and CHOKIDAR_USEPOLLING=true to work correctly in Docker.
The application will automatically attempt to reconnect to the database until it is ready.
```
