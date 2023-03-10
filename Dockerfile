FROM node:latest

WORKDIR /app

COPY . . 
RUN npm install

EXPOSE 3070

ENTRYPOINT ["node","index.js"]