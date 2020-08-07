FROM node:12
WORKDIR /usr/src/api-clean-node
RUN npm install --only=prod