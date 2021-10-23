FROM node

WORKDIR /app

COPY . .

ENV PORT 443
ENV REACT_APP_DOMAIN https://very-krutoi-chat.herokuapp.com

RUN yarn server:install
RUN yarn client:install

RUN yarn client:build

EXPOSE $PORT

CMD ["yarn", "prod"]