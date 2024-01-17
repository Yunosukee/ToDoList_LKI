FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app/backend
WORKDIR /opt/app/backend
# COPY package.json .
# COPY package-lock.json .
COPY . .
RUN npm install -g pnpm
RUN pnpm install 
EXPOSE 3000
CMD [ "npm", "start"]
