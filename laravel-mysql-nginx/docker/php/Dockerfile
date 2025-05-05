FROM php:8.2-fpm-alpine

# Instalar dependências e extensões necessárias para Laravel
RUN apk add --no-cache bash mysql-client libzip-dev zip unzip libpng-dev libjpeg-turbo-dev libfreetype6-dev \
    && docker-php-ext-install pdo pdo_mysql zip gd

WORKDIR /var/www/html

# Permissões de escrita para diretórios de storage e cache do Laravel
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
