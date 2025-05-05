FROM php:8.2-fpm-alpine

RUN apk add --no-cache bash mysql-client libzip-dev zip unzip \
    && docker-php-ext-install pdo pdo_mysql zip

WORKDIR /var/www/html

# Permissões de escrita (se necessário para projetos como Laravel)
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html
