FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn run build

CMD [ "yarn", "run", "start:prod" ]
