    # Указываем базовый образ
   FROM node:16 as build
   
   # Устанавливаем рабочую директорию в контейнере
   WORKDIR /usr/src/app
   
   # Копируем package.json и package-lock.json
   COPY package*.json ./
   
   # Устанавливаем зависимости
   RUN npm install
   
   # Копируем исходный код приложения
   COPY . ./
   
   # Собираем приложение
   RUN npm run build
   
   # Финальный этап с nginx
   FROM nginx:alpine
   COPY --from=build /usr/src/app/build /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"] 