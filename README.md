<div align="center">
  <img src="readme/logo/favicon.png" />
  <h1>Anderson Toledo Martins Moreira</h1>
  <a href="http://www.atmm.dev" target="_blank">Portfolio Online</a>

> Software Developer that love learn and improve your skills in programming languages like CSS (SASS, Bootstrap, TailwindCSS) | JavaScript | React (Next.js) | Typescript | Node (Nest.js), and PHP (Laravel | WordPress).

</div>
<br >
<!-- References for Create budgets :: https://shields.io/category/build -->
<div align="center">
  <img src="https://img.shields.io/static/v1?label=Status&message=Development&color=tomato"/>
</div>

<br >

## Descriptions - Multi-Stack Dockerized Environments

This repository provides ready-to-use Docker environments for various popular technology stacks. These setups are tailored to simulate a production-like environment for local development.

## Available Stacks

- **PHP + MySQL + Nginx**
- **Laravel + MySQL + Nginx**
- **Node.js + MySQL + Nginx**
- **Node.js + MongoDB + Nginx**
- **.NET (C#) + SQL Server + Nginx**
- **Python + MySQL + Nginx**

Each stack is self-contained in its own directory with a `Dockerfile`, `docker-compose.yml`, and `README.md` to explain setup instructions.

## How to Choose a Stack

Choose a project depending on the backend language and database you are using:

| Language      | Database   | Project Directory         |
| ------------- | ---------- | ------------------------- |
| PHP           | MySQL      | `php-mysql-nginx/`        |
| Laravel (PHP) | MySQL      | `laravel-mysql-nginx/`    |
| Node.js       | MySQL      | `node-mysql-nginx/`       |
| Node.js       | MongoDB    | `node-mongodb-nginx/`     |
| C# (.NET)     | SQL Server | `dotnet-sqlserver-nginx/` |
| Python        | MySQL      | `python-mysql-nginx/`     |

<br />

## Installing and run the project

```bash
# Step 01
# Download or clone the repository. In this repository has folder with specific projects boilerplates.

# Step 02
# Choose your Stack and open the project inside your favorite IDE (I use VSCode). And customize the environment variables (if needed).

# Step 03
# Start the container: 'docker-compose up --build'

# Step 04
# Access the app via your browser on 'http://localhost' (or custom ports if configured).

# Step 05
# Database services are configured with default environment variables or .env files (check each folder for details).
```
