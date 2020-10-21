FROM node:13-alpine
WORKDIR /usr/src/app
COPY . ./
RUN apk add protoc
RUN yarn install
RUN yarn run build:prod
CMD [ "node", "dist/apps/mu-platform/main.js" ]