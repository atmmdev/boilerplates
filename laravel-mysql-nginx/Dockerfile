FROM php:8.1-fpm

RUN apt-get update && apt-get install -y     libzip-dev zip unzip git curl     && docker-php-ext-install pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

CMD ["php-fpm"]