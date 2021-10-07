FROM node:lts as build
WORKDIR /usr/src/app
RUN npm install -g serve
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build
CMD serve -p $PORT -s build