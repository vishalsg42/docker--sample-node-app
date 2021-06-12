FROM node:14.7.0

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json","package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD ["node" ,"app.js"]