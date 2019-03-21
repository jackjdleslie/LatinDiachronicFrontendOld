FROM node:11

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY .prettierrc ./

RUN yarn

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
