FROM nginx:alpine

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Кладём свой конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Кладём статику
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
