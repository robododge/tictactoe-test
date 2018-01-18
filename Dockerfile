FROM nginx:1.13
ARG version

RUN rm -rf /etc/nginx/conf.d/*

ADD ./build /tictac-www
COPY ./docker/nginx.conf /etc/nginx/conf.d/
