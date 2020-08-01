FROM mysql:5.6

ADD Init.sql /docker-entrypoint-initdb.d

EXPOSE 3306
