FROM node:latest

WORKDIR /usr/src/SI-backend

COPY server/package.json .
COPY server/server.js .

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]
