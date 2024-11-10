# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Expone el puerto 3000 (puerto en el que nuestro servidor estará corriendo)
EXPOSE 3000

# Define el comando para iniciar el servidor
CMD ["node", "server.js"]
