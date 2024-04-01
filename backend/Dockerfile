   # Указываем базовый образ
   FROM node:16
   
   # Устанавливаем рабочую директорию в контейнере
   WORKDIR /usr/src/app
   
   # Копируем package.json и package-lock.json
   COPY package*.json ./
   
   # Устанавливаем зависимости
   RUN npm install
   
   # Копируем исходный код приложения
   COPY . .

   EXPOSE 5000
   
   # Задаем команду для запуска приложения
   CMD ["node", "app.js"]
   