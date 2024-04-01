# Для запуска и тестирования системы, следуйте этим шагам:

1. Сборка и загрузка образов Docker:

``` 
docker build -t <your-backend-image>:latest ./backend/
docker push <your-backend-image>:latest

docker build -t <your-frontend-image>:latest ./frontend/
docker push <your-frontend-image>:latest

```

2. Деплой бэкенда и сервиса:

``` 
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

```

3. Деплой фронтенда и внешнего сервиса:

```
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

```
4. Получение внешнего IP адреса для фронтенда:

```
kubectl get services

``` 
Найдите EXTERNAL-IP для frontend-service. Это IP-адрес, который можно использовать для доступа к фронтенду из браузера.

Если вы используете Minikube, вы можете получить доступ к сервису через команду 

```
minikube service frontend-service

```