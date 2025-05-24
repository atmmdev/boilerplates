FROM php:8.2-fpm-alpine

RUN apk add --no-cache bash mysql-client libzip-dev zip unzip \
    && docker-php-ext-install pdo pdo_mysql zip

# Install composer
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

WORKDIR /var/www/html

# Permission to Write
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html
