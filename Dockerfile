FROM node:alpine

RUN apk update && apk add bash

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app/backend/
RUN mkdir -p /usr/src/app/frontend/

COPY ./backend/package*.json /usr/src/app/backend/
COPY ./frontend/package*.json /usr/src/app/frontend/

RUN cd /usr/src/app/backend/ && yarn
RUN cd /usr/src/app/frontend/ && yarn

COPY ./backend/. /usr/src/app/backend/
COPY ./frontend/. /usr/src/app/frontend/

RUN cd /usr/src/app/backend/ yarn run build
RUN cd /usr/src/app/frontend/ yarn run build

EXPOSE 4040

RUN npm install concurrently -g

CMD concurrently cd /usr/src/app/backend/ && "yarn run start:prod"