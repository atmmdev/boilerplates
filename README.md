<div align="center">
  <img src="readme/logo/favicon.png" />
  <h1>Anderson Toledo Martins Moreira</h1>
  <a href="http://www.atmm.dev" target="_blank">Portfolio Online</a>

> Frontend Developer & WordPress Developer from Brazil with over 10 years of experience, that love learn and improve your skills in programming languages such as CSS (Sass, Bootstrap, Tailwind CSS) | JavaScript | React (Nextjs) | Typescript | Node (Nestjs), and PHP (Laravel | WordPress).

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

Each stack is self-contained in its own directory with a `Dockerfile`, `docker-compose.yml`, and `README.md` to explain setup instructions. Choose a project depending on the backend language and database you want to using:

|     | Language                  | Database | Project Directory                   |
| --- | ------------------------- | -------- | ----------------------------------- |
| ✅  | Laravel                   | MySQL    | `laravel-mysql-nginx/`              |
| ⛔  | Node.js                   | MySQL    | `node-mysql-nginx/`                 |
| ✅  | PHP                       | MySQL    | `php-mysql-nginx/`                  |
| ✅  | WordPress                 | MySQL    | `wordpress-mysql/`                  |

<br />

## Installing and run the project

```bash
# Step 01 - Download or clone the repository. In this repository has folders with specific language programming boilerplates.

# Step 02 - Choose your Stack and open the project inside your favorite IDE (I use VSCode). And customize the environment variables (if needed).

# Step 03 - Start the container:
docker-compose up --build

# Step 04 - Access the app via your browser on:
http://localhost - (or custom ports if configured).

# Step 05 - Database services are configured with default environment variables or .env files (check each folder for details).
```
