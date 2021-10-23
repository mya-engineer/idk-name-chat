FROM node

WORKDIR /app

COPY . .

RUN yarn server:install
RUN yarn client:install

RUN yarn client:build

ENV PORT 4301

EXPOSE $PORT

CMD ["yarn", "prod"]