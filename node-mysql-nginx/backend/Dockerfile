FROM node:20-alpine

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos e instala dependências
COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000
CMD ["node", "main.js"]
