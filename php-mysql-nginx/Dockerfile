FROM php:8.1.3-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y libzip-dev zip unzip git curl && docker-php-ext-install pdo_mysql zip

# Copy Files to Docker Environment
COPY ./public /var/www

# Set working directory
WORKDIR /var/www
COPY ./public /var/www/public

CMD ["php-fpm"]