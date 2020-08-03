FROM node:latest as build

WORKDIR /usr/src/SI-frontend

COPY package.json .

RUN npm install

COPY src/ ./src
COPY tsconfig.json .
COPY tslint.json .
COPY ionic.config.json .
COPY angular.json .

RUN cp src/environments/environment.prod.ts src/environments/environment.ts

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/src/SI-frontend/www /usr/share/nginx/html

RUN ls /usr/share/nginx/html/build
