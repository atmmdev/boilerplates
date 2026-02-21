# Python + MySQL

Docker environment for studying Python with MySQL and phpMyAdmin. Flexible structure for any type of project: **web**, **ML**, **data science**, **scripts**, etc.

## Structure

```
python-mysql/
├── Dockerfile
├── docker-compose.yml
├── .env.example # Copy to .env
├── requirements.txt # Dependencies Python
├── src/
│ └── main.py # Example of conception MySQL
└──readme.md
```

##Requirements

- [Docker Desktop](https://docs.docker.com/get-docker/)

## Installation and execution

```bash
# 1. Clone and enter the directory
cd python-mysql

# 2. Copy .env.example to .env
- Linux/Mac: cp .env.example .env
- Windows (PowerShell): Copy-Item .env.example .env

# 3. Start the services (MySQL + phpMyAdmin)
docker-compose up -d --build

# 4. Test the Python + MySQL connection
docker-compose run --rm app python src/main.py
```

## Access

| Services   | URL                   |
| ---------- | --------------------- |
| phpMyAdmin | http://localhost:8080 |
| MySQL      | localhost:3306        |

**phpMyAdmin:** use `MYSQL_USER` and `MYSQL_PASSWORD` from `.env`

## Usage by Project Type

### Scripts / General Studies

```bash
docker-compose run --rm app python src/main.py
docker-compose run --rm app python seu_script.py
```

### Web (Flask)

1. Uncomment `flask` ​​in `requirements.txt`
2. Rebuild: `docker-compose build app`
3. Run:

```bash
docker-compose run --rm -p 5000:5000 app flask run --host=0.0.0.0
```

### Web (FastAPI)

1. Uncomment `fastapi` and `uvicorn` in `requirements.txt`
2. Rebuild and run:

```bash
docker-compose run --rm -p 8000:8000 app uvicorn main:app --host 0.0.0.0 --reload
```

### Data Science / ML

1. Uncomment pandas, numpy, scikit-learn, etc. in `requirements.txt`
2. Rebuild and run your notebooks or scripts normally.

### Jupyter Notebook

1. Uncomment `jupyter` in `requirements.txt`
2. Rebuild and run:

```bash
docker-compose run --rm -p 8888:8888 app jupyter notebook --ip=0.0.0.0 --allow-root
```

## Stop and Clear

```bash
docker-compose down --rmi all --volumes
```

## Environment Variables (.env)

| Variables           | Description         | Pattern      |
| ------------------- | ------------------- | ------------ |
| MYSQL_ROOT_PASSWORD | MySQL root password | root_secret  |
| MYSQL_DATABASE      | Database name       | python_study |
| MYSQL_USER          | Application user    | python_user  |
| MYSQL_PASSWORD      | User password       | python_pass  |
| MYSQL_PORT          | MySQL port          | 3306         |
| PHPMYADMIN_PORT     | phpMyAdmin port     | 8080         |