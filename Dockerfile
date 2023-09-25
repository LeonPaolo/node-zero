FROM node:alpine

WORKDIR /home/node/app

USER node

COPY package*.json ./

# RUN npm install

COPY . .

EXPOSE 3000

# CMD [ "tail", "-f", "/dev/null"]
CMD [ "npm", "start" ]