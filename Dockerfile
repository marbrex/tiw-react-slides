FROM node:18.13.0

ENV NODE_ENV=production

ENV PORT=8080
EXPOSE 8080

WORKDIR /app

COPY package.json ./
COPY .yarnrc.yml ./

RUN corepack enable
RUN yarn install

COPY . .

CMD [ "make" ]
