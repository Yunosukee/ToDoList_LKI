FROM node:18.16.0-alpine3.18
RUN mkdir -p /opt/app2
WORKDIR /opt/app2
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 4173
RUN npm run build
CMD [ "npm","run", "preview"]
