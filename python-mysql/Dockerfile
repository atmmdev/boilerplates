# Python + MySQL - Flexible learning environment
# Supports: Web (Flask/FastAPI/Django), ML, Data Science, Scripts, etc.
FROM python:3.12-slim-bookworm

# Avoid output buffering (real-time logs)
ENV PYTHONUNBUFFERED=1 \
PYTHONDONTWRITEBYTECODE=1 \
PIP_NO_CACHE_DIR=1 \
PIP_DISABLE_PIP_VERSION_CHECK=1

# System dependencies for MySQL client
RUN apt-get update && apt-get install -y --no-install-recommends \
  default-libmysqlclient-dev\
  build-essential\
  pkg-config \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies (better layer cache)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copies the code (volume mounts at runtime, but necessary for build)
COPY . .

# Default command: keeps container active for execution
# Use: docker-compose run --rm app python src/main.py
# Use: docker-compose run --rm app flask run --host=0.0.0.0
CMD ["sleep", "infinity"]