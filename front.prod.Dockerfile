FROM node:latest

WORKDIR /usr/src/SI-frontend

COPY package.json .

RUN npm install

COPY src/ ./src
COPY tsconfig.json .
COPY tslint.json .
COPY ionic.config.json .
COPY angular.json .

RUN npm run prod-build

EXPOSE 8100

CMD ["npm", "run", "serve"]
