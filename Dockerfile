FROM node:12
WORKDIR /usr/src/api-clean-node
COPY ./package.json .
RUN npm install --only=prod