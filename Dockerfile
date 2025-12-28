FROM nginx:alpine

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Кладём НАСТОЯЩИЙ nginx-конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Кладём ТОЛЬКО статику
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY logo.png /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
