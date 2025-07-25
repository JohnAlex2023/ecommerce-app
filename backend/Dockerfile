# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia archivos al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que corre el servidor
EXPOSE 3000

# Comando para iniciar el backend
CMD ["npm", "start"]
